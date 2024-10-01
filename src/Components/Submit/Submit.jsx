import React, { useState } from 'react';
import './Submit.css';
import Userfront from "@userfront/core";
import { useNavigate } from 'react-router-dom';

Userfront.init("jb7ywq8b");

const Register = () => {
    return (
        <div className="submit-all-container">
            <h1>Submit a Request</h1>
            <div className="submit-1st-container">

            </div>
            <div className="submit-row">
                <div className='sample-information'>

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
    );
}

export default Register;