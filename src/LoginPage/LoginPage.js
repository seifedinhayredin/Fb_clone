import React from "react";
import './LoginPage.css';
import { Link } from 'react-router-dom';
import HeaderArea from '../HeaderArea/HeaderArea';
function LoginPage(){
    return(
<div className="Login">
    <div className="facebook">
        <div className="facebooktext">
            facebook
        </div>
        
        <div className="logincontainer">
            <div className="logindetail">
            <p className="ti">Log Into Facebook</p>
            <input type="email" placeholder="Email or phone number" /><br/>
            <input type="password" placeholder="Password" /><br/>
            <button className="btn">
            <a href="HeaderArea">Log In</a>
                </button><br/>
            </div>
            <div className="forget">
            <a href="#">forgot account?</a><a href="#">Signup for Facebook</a>
            </div>
        </div>
    </div>
</div>
    );
}

export default LoginPage;