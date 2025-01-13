

const express=require('express');
const userRouter=require('./routes/user.route.js')
const productRouter=require('./routes/product.route.js');
const cors=require("cors");
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}


const app=express();


app.use(express.json())
app.use(cors({origin:['http://localhost:5173','http://localhost:8080']}));
app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter);
app.use('/product',productRouter);

//connecting db and running serve
module.exports=app;

