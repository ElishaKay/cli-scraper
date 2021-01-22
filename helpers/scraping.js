const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const url = require('url');

const getHTML = (pageURL) => {
	request({
		method: "GET",
		url: pageURL
	}, function(err, response, body) {
		if(err){
			console.log('error getting HTML: ',err);
		} else {
			let host = response.request.originalHost
			getImages(host, pageURL, body);
		}
	});
}

const getImages = (host, pageURL, body) =>{
  	console.log('getImages func ran')		
  // 4. load the DOM from the response JSON
    let results = [];
    let $ = cheerio.load(body);

    // 5. use cheerio's jQuery-style selectors to get all images
    $("img").each(function(i, image) {
       var imageURL = 'https://'+ host+ $(image).attr('src');
 	   let timestamp = new Date().getTime();

       downloadImage(imageURL, timestamp+'.png', function(){
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

exports.scrapingHelpers = {getImages, getHTML, downloadImage};