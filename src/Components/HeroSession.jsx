import React from 'react'
import Dashboard from "../assets/Dashboard.png";
import CallToActionBtn from './CallToActionBtn';

const HeroSection = () => {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto max-h-[649px] overflow-hidden md:max-h-[972px] px-4 md:px-0 pt-[48px]  flex flex-col">
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
                    <p className="text-secondary-300 font-normal leading-[150%] tracking-[-0.02em] text-base text-[14px] md:text-[24px] w-full max-w-[621px] mt-[12px] md:mt-[24px]">
                        Your one-stop finance empower platform.
                        <br />
                        Manage all your business expenses with our supafast app.
                    </p>

                    {/* Troisième composant */}
                    <div className="mt-[32px] md:mt-[40px] w-full max-w-[352px]">
                        <CallToActionBtn />
                    </div>
                </div>
            </div>

            {/* Image en bas */}
            <div className="bg-primary text-center w-[319px] h-[226.71786499023438px] md:w-[1200px] md:h-[852.857177734375px]  mx-auto mt-[80px] md:mt-[132px]">
                <img
                    src={Dashboard}
                    alt=""
                    className="object-contain rounded-xl"
                    style={{
                        borderRadius: "11.79px"
                    }}
                />
            </div>
        </section>
    );
};

export default HeroSection;
