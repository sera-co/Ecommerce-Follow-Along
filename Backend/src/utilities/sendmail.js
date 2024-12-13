const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    auth:{
        user: 'serajenova@gmail.com',
        pass: 'qklk hmkz ryig ftmg',
    }
})

module.exports=transporter