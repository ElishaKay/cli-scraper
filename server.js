const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Heyo. let's scrape some data :) 
					\nPlease provide the URL of the web page you'd like to scrape and the output folder like so: 
					\nscrape [url] [folder] 
					\n`, (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})