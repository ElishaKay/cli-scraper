const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const imageSchema = new mongoose.Schema(
    {
        folder: {
            type: String
        },
        downloadedVersion: {
            type: String
        },
        url: {
            type: String,
            index: true
        },
        type: { 
            type: String
        },
        width: { 
            type: Number 
        },
        height: { 
            type: Number 
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Image', imageSchema);
