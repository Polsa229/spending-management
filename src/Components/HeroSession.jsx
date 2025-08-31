import React from 'react'
import Dashboard from "../assets/Dashboard.png";
import CallToActionBtn from './CallToActionBtn';

const HeroSection = () => {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto min-h-[649px] md:min-h-[970px] px-4 md:px-0 pt-[100px] flex flex-col">
            {/* Texte */}
            <div className="grid grid-cols-1 md:grid-cols-12 w-full flex-1">
                <div className="md:col-span-8 md:col-start-3 flex flex-col items-center md:text-center">
                    {/* Premier composant */}
                    <p className="text-white font-bold leading-[150%] tracking-[-0.03em] text-[36px] md:text-[72px] w-full max-w-[748px] md:mt-[20px]">
                        All your business
                        <br />
                        expenses in one place.
                    </p>

                    {/* Deuxième composant */}
                    <p className="text-secondary300 font-normal leading-[150%] tracking-[-0.02em] text-base text-[14px] md:text-[24px] w-full max-w-[621px] mt-[40px]">
                        Your one-stop finance empower platform.
                        <br />
                        Manage all your business expenses with our supafast app.
                    </p>

                    {/* Troisième composant */}
                    <div className="mt-[40px] w-full max-w-[352px]">
                        <CallToActionBtn />
                    </div>
                </div>
            </div>

            {/* Image en bas */}
            <div className="w-full max-w-[1200px] mx-auto mt-auto">
                <img
                    src={Dashboard}
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>
        </section>
    );
};

export default HeroSection;
