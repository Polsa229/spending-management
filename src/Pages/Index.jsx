import { useEffect, useState } from 'react';
import NavbarSection from '../Components/Navbar';
import FooterSection from '../Components/Footer';
import BackToTop from '../Components/BackToTop';
import HeroSection from '../Components/HeroSession';

import Ellipse1 from "../assets/Ellipse/Ellipse1.png"
import Ellipse2 from "../assets/Ellipse/Ellipse2.png"
import Ellipse3 from "../assets/Ellipse/Ellipse3.png"
import Ellipse4 from "../assets/Ellipse/Ellipse4.png"
import Benefit1st from '../Components/Benefit1st';
import Benefit2nd from '../Components/Benefit2nd';
import HowItWorks1st from '../Components/HowItWorks1st';
import HowItWorks2nd from '../Components/HowItWorks2nd';
import SuccessStories from '../Components/SuccessStories';
import Testimonials from '../Components/Testimonials';

function Index() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`font-plusjakarta`}>
            {scrolled ? <NavbarSection /> : null}
            <div id="accueil" className={`bg-secondary700 relative min-h-screen"`}>
                <img src={Ellipse1} alt="Ellipse" className="absolute top-0 left-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse2} alt="Ellipse" className="absolute top-0 right-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse3} alt="Ellipse" className="absolute bottom-0 right-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse4} alt="Ellipse" className="absolute bottom-0 left-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <div className='z-50 h-full w-full m-0 p-0 '>
                    {!scrolled ? <NavbarSection /> : null}
                    {/* <NavbarSection /> */}
                    <HeroSection />
                </div>
            </div>
            <div id="benefit1st">
                <Benefit1st />
            </div>
            <div id="benefit2nd">
                <Benefit2nd />
            </div>
            <div id="howItWorks1st">
                <HowItWorks1st />
            </div>
            <div id="howItWorks2nd">
                <HowItWorks2nd />
            </div>
            <div id="successStories">
                <SuccessStories />
            </div>
            <div id="testimonials">
                <Testimonials />
            </div>

            <div id="about_us" className="">
                <FooterSection />
            </div>

            <BackToTop className="" />
        </div>
    )
}

export default Index;
