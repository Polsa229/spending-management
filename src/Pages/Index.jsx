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
import Pricing from '../Components/Pricing';
import CallToAction from '../Components/CallToAction';
import AnimatedSection from '../Components/AnimatedSection';

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
        <div className={`font-plusjakarta`}
        >
            {scrolled ? <NavbarSection /> : null}
            <div id="accueil"
                // className={`bg-secondary700 relative min-h-screen"`}
                className="relative bg-secondary700 w-full max-w-[1440px] mx-auto min-h-[737px] md:min-h-[1072px] h-auto overflow-hidden"
            >
                <img src={Ellipse1} alt="Ellipse" className="absolute top-0 left-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse2} alt="Ellipse" className="absolute top-0 right-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse3} alt="Ellipse" className="absolute bottom-0 right-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />
                <img src={Ellipse4} alt="Ellipse" className="absolute bottom-0 left-0 h-48 w-48 md:h-96 md:w-96 object-fill z-0" />

                <div className="relative w-full h-full">
                    {/* Navbar */}
                    <div className="w-full h-[88px] md:h-[100px]">
                        {!scrolled ? <NavbarSection /> : null}
                    </div>

                    {/* Hero */}
                    <div className="w-full">
                        <HeroSection />
                    </div>
                </div>
            </div>
            <div id="benefit1st">

                <AnimatedSection>
                    <Benefit1st />
                </AnimatedSection>
            </div>
            <div id="benefit2nd">

                <AnimatedSection>
                    <Benefit2nd />
                </AnimatedSection>
            </div>
            <div id="howItWorks1st">

                <AnimatedSection>
                    <HowItWorks1st />
                </AnimatedSection>
            </div>
            <div id="howItWorks2nd">

                <AnimatedSection>
                    <HowItWorks2nd />
                </AnimatedSection>
            </div>
            <div id="successStories">

                <AnimatedSection>
                    <SuccessStories />
                </AnimatedSection>
            </div>
            <div id="testimonials">

                <AnimatedSection>
                    <Testimonials />
                </AnimatedSection>
            </div>
            <div id="pricing">

                <AnimatedSection>
                    <Pricing />
                </AnimatedSection>
            </div>
            <div id="callToAction">

                <AnimatedSection>
                    <CallToAction />
                </AnimatedSection>
            </div>


            <div id="about_us" className="">

                <AnimatedSection>
                    <FooterSection />
                </AnimatedSection>
            </div>

            <BackToTop className="" />
        </div>
    )
}

export default Index;
