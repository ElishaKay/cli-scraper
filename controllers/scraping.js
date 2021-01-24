const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const Image = require('../models/image');

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
       let imageURL = imagePath;
       if(!imagePath.includes('http')){
          imageURL = 'https://'+ host+ imagePath;
       }
       
   	   let timestamp = new Date().getTime();
       let downloadPath = './downloads/'+folder;

   	   if (!fs.existsSync(downloadPath)){
  		    fs.mkdirSync(downloadPath);
  	   }
       downloadImage(imageURL, downloadPath +'/'+timestamp+'.jpg', function(format){
    		  console.log('image File saved in FileSystem');
          saveImageToDB({url: imageURL, format, width:150, height:150});
  	   });
    });

    console.log(results);
}

const downloadImage = (uri, filename, callback)=>{
  request.head(uri, function(err, res, body){
    
    console.log('content-length:', res.headers['content-length']);

    let format = res.headers['content-type'];
    console.log('format:', format);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback(format));
  });
};

const saveImageToDB = ({url, format, width, height}) => {
  let image = new Image({ url, format, width, height });

  image.save((err, data) => {
        if (err) {
            console.log('error saving image in DB:', err);
        } else {
            console.log('image saved successfully in DB', data);
        }
  });
}

exports.scraping = {getImages, getHTML, downloadImage};