import React, { useState, useEffect } from 'react';

import NavbarSection from '../Components/Navbar';
import HeroSection from '../Components/HeroStack';
import PatnersStack from '../Components/PatnersStack';
import FeaturesSection from '../Components/FeaturesSection';
import PowerfulAnalytics from '../Components/PowerfulAnalytics';
import FooterSection from '../Components/Footer';

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
            <div id="features">
                <FeaturesSection />
            </div>
            <div id="powerfulAnalytics">
                <PowerfulAnalytics />
            </div>
            <div id="footer">
                <FooterSection />
            </div>
            
            {/* <FooterSection /> */}
            {/* <BackToTop className="" /> */}
        </div>
    )
}

export default Index;
