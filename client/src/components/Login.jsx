import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style/Login.css';
import { signUpAPI,loginAPI } from "../service/api";

const signUpValues = {
    emailAddress: '',
    password: '',
    confirmPassword: '',
};
const loginValues={
    emailAddress:'',
    password:'',
};

const Login = (props) => {
    const [validation, setValidation] = useState(true);
    const [signUp, setSignUp] = useState(signUpValues);
    const[login,setLogin] = useState(loginValues);
    function inputChange(e) {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }
    function loginInputChange(e){
        setLogin({...login,[e.target.name]:e.target.value})
    };
    
    async function signUpUser() {
        try {
            console.log("signUp checking");
            console.log(signUp.emailAddress+" "+signUp.password+" "+signUp.confirmPassword);
            if(signUp.password===signUp.confirmPassword){;
            await signUpAPI(({...signUp,action:'signup'}));
            account()
            alert("User signed up successfully");
            }else{
                throw new Error(alert("Enter the same password"));
            }
        } catch (error) {
            console.error("There was an error creating the account!", error);
        }
    }
    async function loginUser(){
        try{
            console.log("login checking");
            console.log(login.emailAddress+" password "+login.password);
            const loginData = await loginAPI({...login,action:'login'});
            console.log(loginData);
            console.log("successfully done");
            props.ValidationChecking(true);
            return;
        }catch(error){
            throw new Error(alert("In Corrent entry please try again",error));
        }
    }
    const account = () => {
        setValidation(!validation);
    };
    return (
        <div id="main">
            {validation ? (
                <div className="card text-center shadow-lg">
                    <div className="card-header">Login</div>
                    <div className="card-body mb-3" id="formItems">
                        <label htmlFor="emailAddress" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" placeholder="name@example.com" name="emailAddress" onChange={loginInputChange} />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" name="password" onChange={loginInputChange}/>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>
                        <button type="button" className="btn btn-primary" onClick={account} name="login">SignUp</button>
                    </div>
                </div>
            ) : (
                <div className="card text-center shadow-lg">
                    <div className="card-header">SignUp</div>
                    <div className="card-body mb-3" id="formItems">
                        <label htmlFor="emailAddress" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailAddress"
                            placeholder="name@example.com"
                            onChange={inputChange}
                            name="emailAddress"
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                            onChange={inputChange}
                            name="password"
                        />
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            aria-describedby="passwordHelpBlock"
                            onChange={inputChange}
                            name="confirmPassword"
                        />
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button
                            name="signup"
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => signUpUser()} // Updated to ensure signUp state is passed
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;


