import React from "react";
import Login from './Components/Login/Login';
import BG from './Components/Background/BG';
import Footer from './Components/Footer/Footer';

function PageLogin() {
    return(
        <div>
            <Login/>
            <BG/>
            <Footer />
        </div>
    )
}

export default PageLogin