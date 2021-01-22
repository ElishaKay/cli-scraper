const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const url = require('url');

const getHTML = (pageURL, folder) => {
	request({
		method: "GET",
		url: pageURL
	}, function(err, response, body) {
		if(err){
			console.log('error getting HTML: ',err);
		} else {
			let host = response.request.originalHost
			getImages(host, pageURL, folder, body);
		}
	});
}

const getImages = (host, pageURL, folder, body) =>{
  	console.log('getImages func ran')		
    let results = [];
    let $ = cheerio.load(body);

    $("img").each(function(i, image) {
       let imagePath = $(image).attr('src')
       console.log('imagePath: ', imagePath)
       var imageURL = 'https://'+ host+ imagePath;
   	   let timestamp = new Date().getTime();
       let downloadPath = './downloads/'+folder;

   	   if (!fs.existsSync(downloadPath)){
  		    fs.mkdirSync(downloadPath);
  	   }
       downloadImage(imageURL, downloadPath +'/'+timestamp+'.png', function(){
    		  console.log('done');
  	   });
    });

    // 7. and boom! there's our images
    console.log(results);
}

const downloadImage = (uri, filename, callback)=>{
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

exports.scraping = {getImages, getHTML, downloadImage};