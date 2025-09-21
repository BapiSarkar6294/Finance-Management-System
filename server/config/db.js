const mongoose=require('mongoose')
const connectdb=async() =>{
    try{
         await mongoose.connect(process.env.DEBURL);
         console.log('connected to mongodb');
    } catch(error){
        console.error('error:',error);
    }
};
    
module.exports=connectdb;
    