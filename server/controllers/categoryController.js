const Category=require('../model/Category');

exports.addcategory=async(req,res)=>{
    try{
        const newCategory=await Category.create(req.body);
        res.status(201).json(newCategory);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.getcategory=async(req,res)=>{
    try{
        const categories=await Category.find();
        res.status(200).json(categories);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.updatecategory=async(req,res)=>{
    try{
        const category=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json(category);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};

exports.deletecategory=async(req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message:"Category deleted"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};