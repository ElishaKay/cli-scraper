const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            index: true
        },
        coverPhoto: {
            type: String
        },
        sponsored: { 
            type: Boolean, 
            default: false 
        },
        product_by: {
            type: String
        },
        product_cost: {
            type: String
        },
        product_link: {
            type: String
        },
        product_imgurl: {
            type: String
        },
        purchase_year: {
            type: Number
        },
        best_seller: { 
            type: Boolean, 
            default: false 
        }, 
        product_rating: {
            type: Number
        },
        total_ratings: {
            type: Number
        },
        main_format: {
            type: String
        },
        search_keyword:{
            type: String
        },
        asin: {
            type: String
        },
        product_summary: {
            type: String
        }, 
        product_reviews: {
            type: Array
        }, 
        serp: [{ 
            type: ObjectId, 
            ref: 'Serp'
        }]
    },
    { timestamps: true }
);

productSchema.index({ _id: 1 }, { unique: true });

module.exports = mongoose.model('Product', productSchema);
