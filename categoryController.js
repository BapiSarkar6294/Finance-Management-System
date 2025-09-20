const Category=require('../model/Category');
//add user
exports.addcategory=async(req,res)=>{
    try{
        const newuser=await Category.create(req.body);
        res.status(201).json(newuser);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//views all user
exports.getcategory=async(req,res)=>{
    try{
        const users=await Category.find();
        res.status(201).json(users);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//update
exports.updatecategory=async(req,res)=>{
    try{
        const user=await Category.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//delete
exports.deletecategory=async(req,res)=>{
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.status(201).json({ message:"user deleted"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};