const fs = require('fs');

const logFiles = (folder) => {
	console.log('folder: ',folder)
	fs.readdir('./downloads/'+folder+'/', (err, files) => {
	  if(err){
	  	console.log(`${folder} not found`)
	  } else {
	  	files.forEach(file => {
		    console.log(file);
	  	});	
	  }
	});	
}

exports.displayImages = (folder) => {
	logFiles(folder)
}