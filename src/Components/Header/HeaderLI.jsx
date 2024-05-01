import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

import back_icon from '../Assets/BackButton.png';
import forward_icon from '../Assets/ForwardButton.png';
import home_icon from '../Assets/Home.png';
import Userfront from "@userfront/core";

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = Userfront.accessToken() !== null;

    const handleLogout = () => {
        Userfront.logout({ redirect: false });
        navigate('/login');
    }

    const navigateHome = () => {
        if (isLoggedIn) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }

    return (
        <div className='header'>
            <div className="left-stuff">

                <div className="title-short">MLV DTP</div>
                <div className="title">MLV Diagnostic Test Portal</div>

            </div>

            <div className="right-stuff">
                <div className="l-o">
                    <button onClick={handleLogout} className="logout-button">
                            <span><div className='logout-button-text'>
                                Logout
                            </div></span>
                    </button>
                </div>

                <div className="navhome" onClick={navigateHome}>
                    <button className="home">
                        <span><img src={home_icon} alt="Home" /></span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
