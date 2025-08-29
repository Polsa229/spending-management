import React from 'react'
import Dashboard from "../assets/Dashboard.png";
import CallToActionBtn from './CallToActionBtn';

const HeroSection = () => {
    return (
        <section className="relative h-screen -minus-navbar flex flex-col justify-between items-center px-3 pb-0">
            <div className="flex-grow text-center max-w-3xl mt-10">
                <p className="text-5xl md:text-[80px] text-white font-bold">
                    All your business expenses in one place.
                </p>

                <p className="mt-8 md:mt-6 text-secondary300 text-base md:text-lg">
                    Your one-stop finance empower platform.
                    Manage all your business expenses with our supafast app.
                </p>

                <div className="mt-8 md:mt-6">
                    <CallToActionBtn />
                </div>
            </div>

            {/* Image toujours en bas */}
            <div className="text-center max-w-3xl">
                <img src={Dashboard} alt="" className="w-full object-contain" />
            </div>
        </section>

    );
};

export default HeroSection;
