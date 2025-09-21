const user=require('../model/transactionController');
//add user
exports.adduser=async(req,res)=>{
    try{
        const newuser=await user.create(req.body);
        res.status(201).json(newuser);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//views all user
exports.getusers=async(req,res)=>{
    try{
        const users=await user.find();
        res.status(201).json(users);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//update
exports.updateuser=async(req,res)=>{
    try{
        const user=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(user);
    }catch(err){
        res.status(400).json({error:err.message});
    }
};
//delete
exports.deleteuser=async(req,res)=>{
    try{
        await user.findByIdAndDelete(req.params.id);
        res.status(201).json({ message:"user deleted"});
    }catch(err){
        res.status(400).json({error:err.message});
    }
};