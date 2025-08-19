import React, { useState, useEffect } from 'react';

import NavbarSection from '../Components/Navbar';
import HeroSection from '../Components/HeroStack';
import PatnersStack from '../Components/PatnersStack';

function Index() {

    return (
        <div className="bg-primary">
            <NavbarSection />
            <div id="accueil">
                <HeroSection />
            </div>
            <div id="patners">
                <PatnersStack />
            </div>
            {/* <FooterSection /> */}
            {/* <BackToTop className="" /> */}
        </div>
    )
}

export default Index;
