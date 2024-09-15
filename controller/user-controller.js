import user from "../model/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const signupUser=async (request,response)=>{
    try{
        const userValue=request.body;
        const newUser = new user(userValue);
        await newUser.save();
        return response.status(200).json();
    }catch(error){
        console.log("error occured from server/signupUser: "+error);
        return response.status(500).json();
    }
}
const loginUser = async(request,response)=>{
    const {emailAddress,password}=request.body;
    console.log("Checking: "+emailAddress+" "+password);
    try{
        const User = await user.findOne({emailAddress});
        // console.log("user",User)
        if(!User){
            return response.status(400).json({message:'user not found'});
        }
        if(password!==User.password){
            return response.status(400).json({message:"Invalid credentails"});
        }
        const token = jwt.sign({id:User._id},'your_jwt_secret',{expiresIn:'1h'});
        response.status(200).json({token,user:{id:User._id,emailAddress:User.emailAddress}});

    }catch(error){
        console.log("error is occured from server/loginUser");
        response.status(500).json({message:'Server error'});
    }
}
export {signupUser,loginUser};