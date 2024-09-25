import React, { useState } from 'react';
import './Register.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import logo_icon from '../Assets/BlueLogo.png';
import eyeOpen from '../Assets/EyeOpen.png';
import eyeClose from '../Assets/EyeClose.png';

Userfront.init("jb7ywq8b");

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const navigateAfterLogin = () => {
        navigate("/");
    }

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            alert("Email and password cannot be blank.");
            return;
        }
    
        try {
    
            const response = await Userfront.login({
                method: "password",
                email: email,
                password: password,
            });
    
            console.log("Login Response:", response);
    
            if (response?.success === true) {
                navigateAfterLogin();
            }
        } catch (error) {
            alert("Incorrect username and password.");
        }
    };

    const handleForgetPassword = () => {
        navigate("/forget")
    };

    const handleBackToLogin = () => {
        navigate("/login")
    };

    return (
        <div className='register-all-container'>
            <div className='register-container'>
                <div className="registration">Registration</div>
                <div className="register-form">
                    <div className='register-all-left'>
                        <div className="inputs">
                            <div className="register-input-first-row">
                                <div className='label-container'>
                                    <div className='l-c-label'>First Name</div>
                                    <div className='first-name'>
                                        <input 
                                            className="font-link"
                                            type="first-name"
                                        />
                                    </div>
                                </div>

                                <div className='label-container'>
                                    <div className='l-c-label'>M.I.</div>
                                    <div className='mi'>
                                        <input 
                                            className="font-link"
                                            type="mi"
                                        />
                                    </div>
                                </div>

                                <div className='label-container'>
                                    <div className='l-c-label'>Last Name</div>
                                    <div className='last-name'>
                                        <input 
                                            className="font-link"
                                            type="last-name"
                                        />
                                    </div>
                                </div>     
                            </div>

                            <div className='label-container'>
                                <div className='l-c-label'>Company Name</div>
                                <div className="company-name">
                                    <input 
                                        className="font-link"
                                        type="company-name"
                                    />
                                </div>
                            </div>

                            <div className="register-input-third-row">
                                <div className='label-container'>
                                    <div className='l-c-label'>LTO Number</div>
                                    <div className='lto-number'>
                                        <input 
                                            className="font-link"
                                            type="lto-number"
                                        />
                                    </div>
                                </div>

                                <div className='label-container'>
                                <div className='l-c-label'>Contact Number</div>
                                    <div className='contact-number'>
                                        <input 
                                            className="font-link"
                                            type="contact-number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='label-container'>
                                <div className='l-c-label'>Email</div>
                                <div className="email">
                                    <input 
                                        className="font-link"
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className='label-container'>
                                <div className='l-c-label'>Password</div>
                                <div className="password">
                                    <input 
                                        className="font-link"
                                        type={visible ? "text" : "password"}
                                        value={password} 
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className="eyecon" onClick={() => setVisible(!visible)}>
                                        <button>
                                            {visible ? <img src={eyeOpen} alt="Show Password" /> 
                                                    : <img src={eyeClose} alt="Hide Password" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='label-container'>
                                <div className='l-c-label'>Repeat Password</div>
                                <div className="retype-password">
                                    <input 
                                        className="font-link"
                                        type={visible ? "text" : "password"}
                                        value={password} 
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <div className="eyecon" onClick={() => setVisible(!visible)}>
                                        <button>
                                            {visible ? <img src={eyeOpen} alt="Show Password" /> 
                                                    : <img src={eyeClose} alt="Hide Password" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>    

                    <div className="register-all-right">
                        <div className='label-container'>
                            <div className='l-c-label'>Client Classification</div>
                                <div className="cli-class">
                                    <div className="cli-class-both">
                                        <div className="cli-class-left">
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Importer
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Exporter
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Slaughterhouse
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Poultry Dressing Plant
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Meat Dealer
                                            </label>
                                        </div>

                                        <div className="cli-class-right">
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Meat Processing Plant
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Meat Cutting Plant
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Consumer
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Plant Officer
                                            </label>
                                            <label class="cli-class-container">
                                                <input type="radio" name="cli-class"/>
                                                <span class="checkmark"></span>
                                                Cold Storage Warehouse
                                            </label>
                                        </div>
                                    </div>

                                    <div className="cli-class-others">
                                        <label class="cli-class-container">
                                            <input type="radio" name="cli-class"/>
                                            <span class="checkmark"></span>
                                            Others:
                                            <input 
                                                className="font-link"
                                                type="cli-class-others-input"
                                            />
                                        </label>
                                    </div>
                                </div>
                        </div>
                        <div className="register-button" onClick={handleLogin}>
                            <button className="register-button-text">Register</button>
                        </div>

                        <div className="register-last-row-text">
                            <button className="forget-text" onClick={handleBackToLogin}>Back To Log In</button>
                            <button className="login-text" onClick={handleForgetPassword}>Forget Password?</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;