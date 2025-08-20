import React from 'react';
import { Code, ImageIcon, Coins } from "lucide-react";
import digitalTokenJs from "../assets/DigitalTokenJs.png"
import { Link } from 'react-router-dom';
import { BsCodeSquare } from 'react-icons/bs';
import "./feature.css";

const FeatureCard = () => {

    return (
        <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-10 gap-8">
            {/* Première ligne */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-3">
                {/* Card 1 */}
                {/* <div className="relative bg-dark rounded-2xl p-6 border border-white/10 transition hover:scale-[1.02] duration-300 shadow-[0_0_30px_5px_rgba(168,85,247,0.5)]"> */}
                <div className="relative bg-dark rounded-2xl p-6 border-2 border-[rgba(168,85,247,0.5)] border-b-0 transition hover:scale-[1.02] duration-300 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.5)]">
                    <div className="flex items-start gap-4 mb-2">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                            <ImageIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-light">Analytics Dashboard</h3>
                        <p className="text-light/70 mt-2 text-sm">
                            Our Analytics Dashboard provides a clear and intuitive interface for you
                            to easily analyze your data. From customizable graphs to real-time data
                            updates, our dashboard offers everything you need to gain valuable insights.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative bg-dark rounded-2xl p-6 border-2 border-[rgba(168,85,247,0.5)] border-b-0 transition hover:scale-[1.02] duration-300 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.5)]">
                    <div className="flex items-start gap-4 mb-2">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-lg">
                            <Coins className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-light">Digital Credit Tokens</h3>
                        <p className="text-light/70 mt-2 text-sm">
                            Reward your customers and incentivize engagement with our innovative
                            digital credit tokens. They can be customized to match your branding,
                            and provide a scalable way to encourage repeat business.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div
                className="flex-1 w-full max-w-6xl grid grid-cols-2 md:grid-cols-2 gap-x-16  relative bg-dark rounded-2xl p-6 transition hover:scale-[1.02] duration-300 border-2 border-[rgba(168,85,247,0.5)] border-b-0 shadow-[0_0_30px_5px_rgba(0, 0, 0, 0.05)]"
            > */}
            <div className="flex-1 w-full max-w-6xl grid grid-cols-2 md:grid-cols-2 gap-x-16 relative bg-dark rounded-2xl p-6 border-2 border-[rgba(168,85,247,0.5)] border-b-0 transition hover:scale-[1.02] duration-300 hover:shadow-[0_0_30px_5px_rgba(168,85,247,0.5)]">

                <div>
                    <div className="flex items-start gap-4 mb-2">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500 to-red-500 shadow-lg">
                            <BsCodeSquare className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-light">Code Collaboration</h3>
                        <p className="text-light/70 mt-2 text-sm mb-4">
                            Our advanced code synchronization technology ensures that your data
                            is always up-to-date and accurate, no matter where it's coming from.
                            Whether you're integrating data from multiple sources or working with a team of developers,
                            our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                        </p>
                        <Link to="/#" className="underline text-light">
                            View code collaboration
                        </Link>
                    </div>

                </div>
                <div className="rounded-xl border-2 border-[rgba(168,85,247,0.5)] border-b-0 shadow-[0_0_30px_5px_rgba(0, 0, 0, 0.05)]">
                    <img src={digitalTokenJs} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;

