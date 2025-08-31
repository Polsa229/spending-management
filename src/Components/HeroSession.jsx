import React from 'react'
import Dashboard from "../assets/Dashboard.png";
import CallToActionBtn from './CallToActionBtn';

const HeroSection = () => {
    return (
        <section className="relative max-h-screen md:min-h-screen flex flex-col lg:flex-1 justify-between items-center px-3 pb-0">
            <div className="mt-10 md:text-center mb-4 grid grid-cols-1 md:grid-cols-12 gap-6 w-full md:justify-center">
                <div className="md:col-span-8 md:col-start-3">
                    <p className="text-5xl md:text-[80px] text-white font-bold">
                        All your business
                        <br />
                        expenses in one place.
                    </p>

                    <p className="mt-8 md:mt-6 text-secondary300 text-base md:text-[24px] line-clamp-[150%]">
                        Your one-stop finance empower platform.
                        <br />
                        Manage all your business expenses with our supafast app.
                    </p>

                    <div className="mt-8 md:mt-6">
                        <CallToActionBtn />
                    </div>
                </div>
            </div>

            {/* Image toujours en bas */}
            <div className="text-center">
                <img src={Dashboard} alt="" className="w-full object-contain" />
            </div>
        </section>

    );
};

export default HeroSection;
