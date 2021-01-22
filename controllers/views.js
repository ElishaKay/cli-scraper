const fs = require('fs');
const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

exports.displayImages = (folder) => {
	if(folder!='favicon.ico'){
		let imagesToDisplay = getFiles('./downloads/'+folder+'/');
		console.log('imagesToDisplay',imagesToDisplay)
		return imagesToDisplay+awesomeTemplateHTML()+awesomeTemplateCSS();
	}
}