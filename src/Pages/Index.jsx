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
            <div id="accueil" className="">
                <HeroSection />
            </div>
            <div id="patners" className="">
                <PatnersStack />
            </div>
            <div id="features" className="">
                <FeaturesSection />
            </div>
            <div id="powerfulAnalytics" className="">
                <PowerfulAnalytics />
            </div>
            <div id="about_us" className="">
                <FooterSection />
            </div>

            <BackToTop className="" />
        </div>
    )
}

export default Index;
