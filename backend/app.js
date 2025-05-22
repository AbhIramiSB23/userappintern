const express=require('express');
const app=new express();
const PORT=4000;
require('./connection')
const userModel=require('./model/userData');
const cors=require('cors')
app.use(cors())
//API for fetching or reding the data from DB
app.get('/users',async(req,res)=>{
    try{
        const data=await userModel.find()
        res.send(data);
    } 
    catch (error) {
        console.log("error occured");
    }

});
//server in listening mode
app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);
});