import React from 'react';
import { Code, ImageIcon, Coins } from "lucide-react";
import digitalTokenJs from "../assets/DigitalTokenJs.png"
import { Link } from 'react-router-dom';
import { BsCodeSquare } from 'react-icons/bs';
import "./feature.css";

const PowerfulAnalytics = () => {

    return (
        <div className=" bg-primary flex flex-col items-center justify-center p-10 gap-8">

            <div
                className="w-full max-w-6xl grid grid-12 gap-x-16  relative bg-dark rounded-2xl p-6 border border-white/10 transition hover:scale-[1.02] duration-300 shadow-[0_0_30px_5px_rgba(168,85,247,0.5)]"
            >
                <div className="absolute h-6 w-full -bottom-4 left-0 bg-dark rounded-b-full z-10 "></div>
                <div className="w-full flex justify-center">
                    <div className="text-center w-2/3">
                        <h1 className="text-6xl font-[400px] mb-10 text-white">
                            Our powerful analytics provides invaluable insights.
                        </h1>
                        <div>
                            <p className="text-light/70 mt-2 text-sm mb-10">
                                Unlock the power of data with our cutting-edge analytics product.
                                Get instant insights with our user-friendly Analytics Dashboard,
                                and take advantage of our innovative digital credit tokens to reward
                                your customers and incentivize engagement.
                            </p>

                            <Link
                                to="/#"
                                className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-secondary hover:shadow-secondary/50 hover:shadow-2xl focus:outline-none duration-300"
                            >
                                Download the app
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bloc Code */}

        </div>
    );
};

export default PowerfulAnalytics;

