const User = require('../models/user.model')
const {validationResult} = require('express-validator');
const postUser = async (req,res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const oldUser = await User.findOne({email:req.body.email});
        if(oldUser){
            return res.status(400).json({"message":"User already found!"})
        }
        // console.log(oldUser.email)
        const user = await User.create(req.body);
        return res.status(200).json(user);
    }
    catch(err){
        return res.status(500).json({"message":err.message});
    }
}
module.exports ={
    postUser
}