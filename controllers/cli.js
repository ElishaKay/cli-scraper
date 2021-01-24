const { scraping } = require('./scraping');

const launchCLI = () => {
	const readline = require('readline').createInterface({
	  input: process.stdin,
	  output: process.stdout
	})

	readline.question(`Heyo. let's scrape some data :)
						\nPlease provide the URL of the web page you'd like to scrape and the output folder like so: 
						\nscrape [url] [folder] 
						\n`, (command) => {
	  	console.log('the command is: ', command)

	  	let userCommands = command.split(' '); 
	  	const url = userCommands[1];
		const folder = userCommands[2];
		scraping.getHTML(url, folder);
		readline.close()
	})	
}

exports.cli = {launchCLI}