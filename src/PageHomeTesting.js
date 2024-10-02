import React from "react";
import HomeTesting from './Components/Home/HomeTesting';
import BG from './Components/Background/BG';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function PageHomeTesting() {
    return(
        <div>
            <Header/>
            <HomeTesting/>
            <BG/>
            <Footer />
        </div>
    )
}

export default PageHomeTesting