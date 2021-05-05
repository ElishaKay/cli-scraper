const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const pageSchema = new mongoose.Schema(
    {
        searchKeyword:{
            type: String
        },
        totalSearchPages: {
            type: Number  
        },
        searchPageNumber: {
            type: Number  
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Serp', SerpSchema);
