

const express=require('express');
const userRouter=require('./routes/user.route.js')
const productRouter=require('./routes/product.route.js');
const cartRouter=require('./routes/cart.route.js')
const OrderRouter=require('./routes/order.route.js')
const cors=require("cors");
if (process.env.NODE_ENV !== 'PRODUCTION') {
    require('dotenv').config({
        path: './src/config/.env',
    });
}


const app=express();


app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this frontend
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  }));
app.get('/',(req,res)=>{
    return res.send('heyy there!')
})

// app.use('/user')

app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/cart',cartRouter)
app.use('/orders',OrderRouter)

//connecting db and running serve
module.exports=app;

