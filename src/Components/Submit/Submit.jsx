import React, { useState } from 'react';
import './Submit.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';

import blue_logo_icon from '../Assets/BlueLine.png';

Userfront.init("jb7ywq8b");

const Register = () => {
    return (
        <div className="submit-all-container">
            <div className='submit-container'>
                <div className='submit-title'>Submit a Request</div>
                <div className="submit-1st-container">
                    <div className='submit-1st-container-column'>
                        <div className='submit-1st-container-column-row'>
                            <div className='submit-1st-container-column-row-column-1'>
                                Representative Name:
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='submit-1st-container-column-row-column-2'>
                                Contact Number:
                                <input type="text" value="0999 999 9999"/>
                            </div>
                            <div className='submit-1st-container-column-row-column-3'>
                                Email Address:
                                <input type="text" value="sample_email123@example.com.ph"/>
                            </div>
                            <div className='submit-1st-container-column-row-column-4'>
                                Company Name:
                                <input type="text" value="University of the Philippines Manila"/>
                            </div>
                        </div>
                    </div>
                    <p className='note'>
                            * these information are prefilled with your logged-in details
                    </p>
                </div>
                <div className="submit-row">
                    <div className='sample-information'>
                        <div className='sample-title'>Sample Information</div>
                        <img src={blue_logo_icon} alt="blue line"/>
                        <div className='sample-rows'>
                            <div className='sample-row'>
                                <div>Sample Type/Description:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Lot/Batch Number:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Sample Source:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Production Date:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Expiry Date:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Sampling Date:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                            <div className='sample-row'>
                                <div>Sampler Name:</div>
                                <input type="text" value="A*******r J*****n A M*******d"/>
                            </div>
                        </div>
                    </div>
                    <div className='submit-column'>
                        <div className='purposeoftesting'>

                        </div>
                        <div className='testselection'>

                        </div>
                        <div className='submit-button'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;