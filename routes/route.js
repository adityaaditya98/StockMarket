import express from 'express';
import { signupUser,loginUser } from '../controller/user-controller.js'; // Ensure file extension is correct

const Router = express.Router();

// Router.use('/signup', signupUser);
// Router.use('/login',loginUser);

Router.post('/',async (request,resposne)=>{
    const {action}=request.body;
    console.log("checking action "+action);
    try{
    if(action==='login'){
        return await loginUser(request,resposne);
    }else if(action=='signup'){
        return await signupUser(request,resposne);
    }else{
        return resposne.status(400).json;
    }
    }catch(error){
        console.log("error has been occured in login page routes");
    }

})
export default Router;
