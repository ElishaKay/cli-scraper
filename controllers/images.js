const fs = require('fs');
const Image = require('../models/image');
const { awesomeTemplateCSS } = require('../templates/awesomeTemplateCSS');
const { awesomeTemplateHTML } = require('../templates/awesomeTemplateHTML');

exports.displayImages = (req, res, next) => {
    Image.find({folder: req.params.folder}, function(err, imagesFromDB) {
        if (err) {
          console.log('error fetching images',err);
        } else {
              if(imagesFromDB && imagesFromDB.length>0){
                    res.send(awesomeTemplateCSS()+awesomeTemplateHTML(imagesFromDB));
              }  
        }
    });
}