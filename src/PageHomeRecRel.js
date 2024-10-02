import React from "react";
import HomeRecRel from './Components/Home/HomeRecRel';
import BG from './Components/Background/BG';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function PageHomeRecRel() {
    return(
        <div>
            <Header/>
            <HomeRecRel/>
            <BG/>
            <Footer />
        </div>
    )
}

export default PageHomeRecRel