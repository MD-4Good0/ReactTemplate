import React, { useState } from 'react';
import './Register.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';

import logo_icon from '../Assets/BlueLogo.png';
import eyeOpen from '../Assets/EyeOpen.png';
import eyeClose from '../Assets/EyeClose.png';

Userfront.init("jb7ywq8b");

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        mi: "",
        lastName: "",
        companyName: "",
        ltoNumber: "",
        contractNumber: "",
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [visible, setVisible] = useState(false);
    const [clientClassification, setClientClassification] = useState({
        importer: false,
        exporter: false,
        slaughterhouse: false,
        poultryDressingPlant: false,
        meatDealer: false,
        meatProcessingPlant: false,
        meatCuttingPlant: false,
        consumer: false,
        plantOfficer: false,
        coldStorageWarehouse: false,
        others: false,
    });
    const [otherClassification, setOtherClassification] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setClientClassification({ ...clientClassification, [e.target.name]: e.target.checked });
    };

    const handleRegister = async () => {
        if (formData.password !== formData.repeatPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Add validation for other required fields here

        try {
            const response = await Userfront.signup({
                method: "password",
                email: formData.email,
                password: formData.password,
                data: {
                    firstName: formData.firstName,
                    mi: formData.mi,
                    lastName: formData.lastName,
                    companyName: formData.companyName,
                    ltoNumber: formData.ltoNumber,
                    contractNumber: formData.contractNumber,
                    clientClassification: {
                        ...clientClassification,
                        otherClassification,
                    },
                },
            });

            console.log("Registration Response:", response);

            if (response?.success === true) {
                navigate("/");
            }
        } catch (error) {
            alert("Registration failed. Please try again.");
        }
    };

    const navigateToLogin = () => {
        navigate("/login");
    };

    const navigateToForgotPassword = () => {
        navigate("/forget");
    };

    return (
        <div className='register-all-container'>
            <div className='register-all-left'>
                <div className='register-container'>
                    <div className="register-form">
                        <input
                            className="font-link"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            placeholder="First Name"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="text"
                            name="mi"
                            value={formData.mi}
                            placeholder="MI"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            placeholder="Last Name"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            placeholder="Company Name"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="text"
                            name="ltoNumber"
                            value={formData.ltoNumber}
                            placeholder="LTO Number"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="text"
                            name="contractNumber"
                            value={formData.contractNumber}
                            placeholder="Contract Number"
                            onChange={handleInputChange}
                        />
                        <input
                            className="font-link"
                            type="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <div className="password-input">
                            <input
                                className="font-link"
                                type={visible ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                placeholder="Password"
                                onChange={handleInputChange}
                            />
                            <div className="eyecon" onClick={() => setVisible(!visible)}>
                                <button>
                                    {visible ? <img src={eyeOpen} alt="Show Password" /> 
                                             : <img src={eyeClose} alt="Hide Password" />}
                                </button>
                            </div>
                        </div>
                        <input
                            className="font-link"
                            type="password"
                            name="repeatPassword"
                            value={formData.repeatPassword}
                            placeholder="Repeat Password"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="register-button" onClick={handleRegister}>
                        <button className="register-button-text">Register</button>
                    </div>

                    <div className="register-last-row-text">
                        <button className="register-text" onClick={navigateToLogin}>Back to Login</button>
                        <button className="register-text" onClick={navigateToForgotPassword}>Forgot Password</button>
                    </div>
                </div>
            </div>
            <div className='register-all-right'>
                <div className="client-classification">
                    <h3>Client Classification</h3>
                    <div className="checkbox-list">
                        {Object.entries(clientClassification).map(([key, value]) => (
                            key !== 'others' && (
                                <div key={key} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        id={key}
                                        name={key}
                                        checked={value}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                                </div>
                            )
                        ))}
                        <div className="checkbox-item">
                            <input
                                type="checkbox"
                                id="others"
                                name="others"
                                checked={clientClassification.others}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="others">Others</label>
                            {clientClassification.others && (
                                <input
                                    type="text"
                                    value={otherClassification}
                                    onChange={(e) => setOtherClassification(e.target.value)}
                                    placeholder="Specify other classification"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;