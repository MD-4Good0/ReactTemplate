import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

import home_icon from '../Assets/Home.png';
import white_logo_icon from '../Assets/WhiteLogo.png';

import Userfront from "@userfront/core";

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(Userfront.accessToken() !== null);

    // Check login status on component mount
    useEffect(() => {
        // Update login status whenever the component mounts
        const updateLoginStatus = () => {
            setIsLoggedIn(Userfront.accessToken() !== null);
        };

        updateLoginStatus();
        
        // You might want to set an interval or other logic to periodically check login status if necessary
        // For example, checking whenever the user navigates back to this component might be one option

    }, []);

    const handleLogout = () => {
        Userfront.logout({ redirect: false }); // Perform logout without redirect
        setIsLoggedIn(false); // Update the state to reflect the logged-out status
        navigate('/login'); // Redirect to the login page
    };

    const navigateHome = () => {
        if (isLoggedIn) {
            navigate('/'); // Navigate to home if logged in
        } else {
            navigate('/login'); // Navigate to login if not logged in
        }
    };

    return (
        <div className='header'>
            <div className="left-stuff">
                <img src={white_logo_icon} alt="Logo" />
                <div className="title">LIMS</div>
            </div>

            <div className="right-stuff">
                {isLoggedIn && ( // Only show logout button if logged in
                    <div className="l-o">
                        <button onClick={handleLogout} className="logout-button">
                            <span><p className='logout-button-text center'>Log out</p></span>
                        </button>
                    </div>
                )}

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
