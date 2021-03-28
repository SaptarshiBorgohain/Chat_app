import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";
function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    };
    
    return (
        <div className="login">
            <div className="login__logo">
                 <img src="https://cdn.jim-nielsen.com/ios/512/spike-email-messenger-chat-2019-05-01.png" alt="" />
                 <h1>Swift</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
