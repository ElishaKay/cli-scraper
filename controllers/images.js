const fs = require('fs');
const Image = require('../models/image');
const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.displayImages = (req, res, next) => {
    Image.find().distinct('folder', function(error, allFolders) {
        Image.find({folder: req.params.folder}, function(err, images) {
            if (err) {
              console.log('error fetching images',err);
            } else {
                  if(images && images.length>0){
                        res.send(awesomeTemplateCSS()+awesomeTemplateHTML({allFolders, images}));
                  }  
            }
        });
    });

    
}