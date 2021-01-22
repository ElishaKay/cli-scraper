const fs = require('fs')

const { scrapingHelpers } = require('./helpers/scraping');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const launchCLI = () => {
	readline.question(`Heyo. let's scrape some data :)
						\nPlease provide the URL of the web page you'd like to scrape and the output folder like so: 
						\nscrape [url] [folder] 
						\n`, (command) => {
	  	console.log('the command is: ', command)

	  	const url = command.split(' ')[1];
		scrapingHelpers.getHTML(url);
		readline.close()
	})	
}

launchCLI();

// const url = command.split(' ')[1];
// const path = './images/image.png'

// downloadImage(url, path, () => {
//   console.log('✅ Done!')
// })