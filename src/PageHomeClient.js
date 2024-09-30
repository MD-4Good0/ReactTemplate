import React from "react";
import HomeClient from './Components/HomeClient/HomeClient';
import BG from './Components/Background/BG';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function PageHomeClient() {
    return(
        <div>
            <Header/>
            <HomeClient/>
            <BG/>
            <Footer />
        </div>
    )
}

export default PageHomeClient