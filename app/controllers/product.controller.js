const Product = require('../models/product.model');

const postSingleImage = async (req,res) => {
    try{
        const product = await Product.create({
            title: req.body.title,
            content: req.body.content,
            img_url:req.file.path
        })
        return res.status(201).json({data:product});
    }
    catch(err){
        return res.status(404).json({"msg":"Product is not created!"})
    }
}

const postMultipleImage = async (req,res) => {
    try{
        const files = req.files.map((file)=>file.path);
        const product = await Product.create({
            title: req.body.title,
            content: req.body.content,
            img_url:files
        })
        return res.status(201).json({data:product});
    }
    catch(err){
        return res.status(404).json({"msg":"Product is not created!"})
    }
}

module.exports ={
    postSingleImage,
    postMultipleImage
}