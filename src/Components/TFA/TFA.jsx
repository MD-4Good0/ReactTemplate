import React, { useState } from 'react';
import './TFA.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

Userfront.init("jb7ywq8b");

const Forget = () => {
    const [authCode, setAuthCode] = useState("");
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate("/login")
    };

    const handleRegister = () => {
        navigate("/register")
    };

    const sendResetLink = async (authCode) => {
        try {
          const response = await fetch("https://api.userfront.com/v0/auth/reset", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              authCode,
            }),
          });
      
          if (response.ok) {
            console.log("Reset link sent successfully.");
          } else {
            console.error("Error sending reset link.");
          }
        } catch (error) {
          console.error("Network error:", error);
        }
      };
      
      sendResetLink("user@example.com");

    return (
        <div className='tfa-all-container'>
            <div className='tfa-all-left'>
                <div className='tfa-container'>
                    <div className='t-c-container'>
                        <p className="t-c-c-title">
                            Two-Factor
                        </p>
                        <p className="t-c-c-title">
                            Authentication
                        </p>
                        <p className="t-c-c-text">
                        Enter the code from your provided email below.
                        </p>
                        
                    </div>
                    <div className="tfa-email">               
                        <div className="tfa-input">
                            <input 
                                className="font-link"
                                type="text" 
                                value={authCode}
                                placeholder="Authentication Code"
                                onChange={(e) => setAuthCode(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="login-button">
                        <button className="login-button-text">Log In</button>
                    </div>
                </div>
            </div>
            <div className='tfa-all-right'>
                <p className="tfa-first-row">
                    Welcome to the
                </p>
                <div className="tfa-second-row">
                    <p className="L">L</p>
                    <p className="ab">ab</p>
                    <p className="I">I</p>
                    <p className="nformation">nformation</p>
                    <p className="M">M</p>
                    <p className="anagement">anagement</p>
                    <p className="S">S</p>
                    <p className="ystem">ystem</p>
                </div>
                <div className="tfa-third-row">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus metus arcu, molestie ac tempor at, fringilla eget ligula. 
                        Vestibulum scelerisque viverra tempor. Sed efficitur risus id cursus viverra. 
                        Proin ullamcorper nulla sed nisi ultricies molestie. Ut posuere pulvinar ornare. 
                        Nunc sit amet est sit amet justo mollis fermentum. Fusce sollicitudin eleifend gravida. 
                        Donec non mattis nunc. Mauris sollicitudin viverra elit, eu pretium diam blandit id. 
                        Aenean dolor ipsum, gravida a neque varius, pulvinar pharetra metus. 
                        Donec auctor arcu at malesuada hendrerit. Nunc luctus, magna sed efficitur ornare, 
                        mauris tellus sagittis lacus, sed fermentum tortor leo et tellus. Aliquam erat volutpat. 
                        Ut sapien sem, viverra vel sapien ut, lobortis sollicitudin lacus.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Forget;