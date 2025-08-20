import React, { useEffect, useState } from 'react';
import CallToActionBtn from './CallToActionBtn';
import bgHeroBanner from "../assets/Hero-Stack-min.jpg"
import imageWrapper from "../assets/Hero-Stack.png"

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            className="relative flex-1 bg-primary md:min-h-screen flex flex-col items-center justify-center px-4 "
        >
            <img
                src={bgHeroBanner}
                alt="Hero background"
                className="absolute top-0 w-full h-full object-fill z-0"
            />
            <div className="absolute h-6 w-full -bottom-1 left-0 bg-primary z-10 " />
            <div className="flex flex-col items-center mb-6 z-10">
                <div className="text-center mt-10 max-w-3xl">
                    <span className="text-sm text-lightOverlay border border-lightOverlay px-2 py-1 rounded-full">
                        We just raised $20M in Series B. Learn more
                    </span>

                    <h1 className="text-5xl md:text-[80px] mt-4 text-gradient-custom">
                        Modern analytics for the modern world
                    </h1>
                    <p className="mt-4 text-[#ECECECA6] text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>

                    <div className="mt-6">
                        <CallToActionBtn hero={true} />
                    </div>
                </div>
                <div className="text-center mt-5 max-w-3xl shadow-soft-purple">
                    <img src={imageWrapper} alt="" />
                </div>
            </div>
            {/* <div className="z-10 absolute w-full h-full inset-x-0 -top-2 rounded-2xl blur-xl bg-[0_0_20px_6px_rgba(168,85,247,0.5)] opacity-50"></div> */}

        </section>
    );
};

export default HeroSection;
