const request = require('request')
const cheerio = require('cheerio')
const url = require('url');

const getImages = (pageURL, body) =>{
  	console.log('getImages func ran')		
  // 4. load the DOM from the response JSON
    let results = [];
    let $ = cheerio.load(body);

    // 5. use cheerio's jQuery-style selectors to get all images
    $("img").each(function(i, image) {
       var imageURL = $(image).attr('src');
       console.log('imageURL', imageURL)
    });

    // 7. and boom! there's our images
    console.log(results);
}

const getHTML = (pageURL) => {
	request({
		method: "GET",
		url: pageURL
	}, function(err, response, body) {
		if(err){
			console.log('error getting HTML: ',err);
		} else {
			getImages(pageURL, body);
		}
	});
}

const downloadImage = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

exports.scrapingHelpers = {getImages, getHTML, downloadImage};