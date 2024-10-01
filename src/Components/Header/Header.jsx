import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

import home_icon from '../Assets/Home.png';
import white_logo_icon from '../Assets/WhiteLogo.png';

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
                <img src={white_logo_icon} alt="Logo" />
                <div className="title">LIMS</div>

            </div>

            <div className="right-stuff">
                <div className="l-o">
                    <button onClick={handleLogout} className="logout-button">
                        <span><p className='logout-button-text center'>
                            Log out
                        </p></span>
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
