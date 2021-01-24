const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const probe = require('probe-image-size');
const Image = require('../models/image');
const download = require('image-downloader')


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

    $("img").each(async function(i, image) {
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

        let size = await probe(imageURL);
        console.log('size',size)
        let {width, height, type, length} = size;
        
        let downloadedVersion = `/${folder}/${timestamp}.${type}`;    
        let imageFSPath = downloadPath +'/'+timestamp+'.'+type;

        console.log('imageFSPath: ',imageFSPath);

        downloadImage(imageURL, imageFSPath, function(){
          saveImageToDB({url: imageURL, folder, downloadedVersion, width, height, type, length});
       });
    });

    console.log(results);
}

const downloadImage = (uri, filename, callback)=>{
  const options = {
    url: uri,
    dest: filename
  }

  download.image(options)
    .then(({ filename }) => {
      console.log('Saved to', filename)  
      callback()
    })
    .catch((err) => console.error('error saving file',err))
};

const saveImageToDB = ({url, folder, downloadedVersion, width, height, type, length}) => {
  let image = new Image({ url, folder, downloadedVersion, width, height, type, length });

  image.save((err, data) => {
        if (err) {
            console.log('error saving image in DB:', err);
        } else {
            console.log('image saved successfully in DB', data);
        }
  });
}

exports.scraping = {getImages, getHTML, downloadImage};