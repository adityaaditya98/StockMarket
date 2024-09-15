//api call
// api.js
import axios from 'axios';
const API_URL='';
const signUpAPI = async (value) => {
    try {
        const response = await axios.post(API_URL, { ...value, action: 'signup' });
        console.log(response.data.message);
    } catch (error) {
        console.error('There was an error created in signUpAPI! ', error);
    }
};

const loginAPI = async (value) => {
    try {
        console.log("loginApi checking");
        const response = await axios.post(API_URL, { ...value, action: 'login' });
        return response.data;
    } catch (error) {
        console.log('There was an error created in loginAPI ', error);
    }
};

export { signUpAPI, loginAPI };
