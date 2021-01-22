const fs = require('fs')
const request = require('request')
const cheerio = require('cheerio')
const url = require('url');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const getHTML = (pageURL) => {
	request({
		method: "GET",
		url: pageURL
	}, function(err, response, body) {
		if(err){
			console.log('error getting HTML: ',err);
			launchCLI();
		} else {
			getImages(pageURL, body);
		}
	});
}

const getImages = (pageURL, body) =>{
  	console.log('getImages func ran')		
  // 4. load the DOM from the response JSON
    let results = [];
    let $ = cheerio.load(body);

    // 5. use cheerio's jQuery-style selectors to get all images
    $("img").each(function(i, image) {

        // 6. resolve absolute URL and add to our results array
        results.push(url.resolve(page_url, $(image).attr('src')));
    });

    // 7. and boom! there's our images
    console.log(results);
}

const downloadImage = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

const launchCLI = () => {
	readline.question(`Heyo. let's scrape some data :)
						\nPlease provide the URL of the web page you'd like to scrape and the output folder like so: 
						\nscrape [url] [folder] 
						\n`, (command) => {
	  	console.log('the command is: ', command)

	  	const url = command.split(' ')[1];
		getHTML(url);
		readline.close()
	})	
}

launchCLI();

// const url = command.split(' ')[1];
// const path = './images/image.png'

// downloadImage(url, path, () => {
//   console.log('✅ Done!')
// })