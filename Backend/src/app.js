if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    });
}
const express= require('express');
const app=express()
const userRouter=
app.get('/',(req,res)=>{
    return res.send("Welcome to backend")
})
app.use
module.exports=app;

