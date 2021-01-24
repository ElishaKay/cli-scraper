const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const imageSchema = new mongoose.Schema(
    {
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
