const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{type: String, required: true},
    content:{type: String, required: true},
    img_url:[{type: String, required: true}]

},
{timestamps:true}
)

const Product = mongoose.model('product',ProductSchema);
module.exports = Product;