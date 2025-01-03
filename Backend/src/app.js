

const express=require('express');
const userRouter=require('./routes/user.route.js')
const productRouter=require('./routes/product.route.js');
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}


const app=express();


app.use(express.json())

app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter);
app.use('/product',productRouter);

//connecting db and running serve
module.exports=app;

