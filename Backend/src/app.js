if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}

const express=require('express');
const userRouter=require('./routes/user.route.js')


const app=express();


app.use(express.json())

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter)

//connecting db and running serve
module.exports=app;

