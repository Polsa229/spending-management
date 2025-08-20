import React, { useState, useEffect } from 'react';

import NavbarSection from '../Components/Navbar';
import HeroSection from '../Components/HeroStack';
import PatnersStack from '../Components/PatnersStack';
import FeaturesSection from '../Components/FeaturesSection';
import PowerfulAnalytics from '../Components/PowerfulAnalytics';
import FooterSection from '../Components/Footer';
import BackToTop from '../Components/BackToTop';

function Index() {

    return (
        <div className="bg-primary">
            <NavbarSection />
            <div id="accueil" className="border-2">
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
            <div id="about_us">
                <FooterSection />
            </div>

            <BackToTop className="" />
        </div>
    )
}

export default Index;
