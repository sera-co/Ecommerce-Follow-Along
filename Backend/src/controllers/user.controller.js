const ErrorHandler=require('../utilities/ErrorHandler')
const UserModel=require('../models/user.model');

export async function CreateUser(request,response){
    const{Name,email,password}=request.body;
    const CheckUserPresent=await UserModel.findOne({
        email:email,
    })
    if(CheckUserPresent){
        return new ErrorHandler('Aldready present in DB',400);
    }
    new UserModel({
        Name:Name,
        email:email,
        password:password,
    })
    await UserModel.save();
    return res.send('User created successfully');
}