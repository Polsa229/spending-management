import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Free from '../assets/Pricing/free.png';
import Pro from '../assets/Pricing/pro.png';
import Ultimate from '../assets/Pricing/ultimate.png';
import arrow07 from '../assets/Arrow07.png';

import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6';

export const pricingData = [
    {
        title: 'Free',
        icon: Free,
        price: 0,
        description: "Perfect plan to get started",
        features: [
            { text: "Sync across device", included: true },
            { text: "5 workspace", included: true },
            { text: "Collaborate with 5 user", included: true },
            { text: "Sharing permission", included: false },
            { text: "Admin tools", included: false },
            { text: "100+ integrations", included: false }
        ],
        buttonText: 'Get Your Free Plan',
        popular: false,
    },
    {
        title: 'Pro',
        icon: Pro,
        price: 12,
        description: "Perfect plan for professionals!",
        features: [
            { text: "Everything in Free Plan", included: true },
            { text: "Unlimited workspace", included: true },
            { text: "Collaborative workspace", included: true },
            { text: "Sharing permission", included: true },
            { text: "Admin tools", included: true },
            { text: "100+ integrations", included: true }
        ],
        buttonText: 'Get Started',
        popular: true,
    },
    {
        title: 'Ultimate',
        icon: Ultimate,
        price: 33,
        description: "Best suits for great company!",
        features: [
            { text: "Everything in Pro Plan", included: true },
            { text: "Daily performance reports", included: true },
            { text: "Dedicated assistant", included: true },
            { text: "Artificial intelligence", included: true },
            { text: "Marketing tools & automations", included: true },
            { text: "Advanced security", included: true }
        ],
        buttonText: 'Get Started',
        popular: false,
    },
]

export default function Pricing() {

    const [isYearly, setIsYearly] = useState(false)

    return (
        <section className="py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center justify-center text-center">
                    <div className="md:col-span-8 md:col-start-3">
                        <div className="grid grid-cols-1 gap-6 w-full mb-3">
                            <h1 className="text-5xl font-bold">Ready to Get Started?</h1>
                            <p className="text-[20px] leading-[150%] text-secondary300 tracking-[-0.02em]">
                                Choose a plan that suits your business needs
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="flex items-center justify-center gap-4 mb-3">
                                {/* Monthly Label */}
                                <span className="font-semibold">Monthly</span>

                                {/* Switch */}
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isYearly}
                                        onChange={() => setIsYearly(prev => !prev)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-24 h-12 bg-primary rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary shadow-md transition-colors duration-300 peer-checked:bg-primary/80 relative">
                                        <div className={`absolute top-1 left-1 w-10 h-10 bg-white rounded-full shadow transition-transform duration-300 ${isYearly ? 'translate-x-12' : ''}`} />
                                    </div>
                                </label>

                                {/* Yearly Label */}
                                <span className="font-semibold">Yearly</span>
                            </div>

                            {/* Discount Badge */}
                            {isYearly && (
                                <div className="flex justify-end items-center">
                                    <div className="px-3 py-1 bg-primary100 rounded-full flex items-center gap-2 text-sm font-semibold w-auto">
                                        <FaArrowRight size={12} />
                                        Save 65%
                                    </div>
                                    <img src={arrow07} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Grid 3 colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingData.map((plan) => {
                        const netRate = 1 - 0.65;
                        const discountedYearly = plan.price;

                        // prix annuel d'origine (avant remise)
                        let baseYearlyPrice = discountedYearly / netRate;
                        baseYearlyPrice = baseYearlyPrice.toFixed(2)
                        return (
                            <div
                                key={plan.title}
                                className="bg-secondary100 text-black rounded-xl p-6 flex flex-col"
                            >
                                <div
                                    className="flex justify-between items-center"
                                >

                                    <div
                                        className="flex justify-between items-center gap-3"
                                    >
                                        <img src={plan.icon} alt={plan.title} className="w-6 h-6 " />
                                        {/* Titre & Prix */}
                                        <h3 className="text-2xl font-bold">{plan.title}</h3>
                                    </div>

                                    {/* Badge “Popular” */}
                                    {plan.popular && (
                                        <span className="self-center mb-4 px-3 py-1 bg-secondary700 text-white rounded-full text-sm font-semibold">
                                            Popular
                                        </span>
                                    )}

                                </div>

                                <p className="text-secondary400 mt-2">{plan.description}</p>

                                <div className="flex items-baseline mt-4">
                                    <span className="text-4xl font-extrabold">${!isYearly && plan.price ? baseYearlyPrice : plan.price}</span>
                                    <span className="ml-1 text-lg text-secondary300">/month</span>
                                </div>

                                {/* Liste des fonctionnalités */}
                                <ul className="mt-6 space-y-3 flex-1">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            {
                                                feature.included ?
                                                    <div className="bg-[green] mr-2 rounded-full flex items-center justify-center p-1">

                                                        <FaCheck className="text-white" />
                                                    </div>
                                                    :

                                                    <div className="bg-secondary400 mr-2 rounded-full flex items-center justify-center p-1">
                                                        <FaXmark className="text-white" />
                                                    </div>
                                            }
                                            <span className={`text-sm ${feature.included ? "text-secondary700" : "text-secondary400"} `}>{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bouton d’action */}
                                <button
                                    className={`mt-6 w-full py-3 rounded-full font-semibold transition bg-primary text-white`}
                                >
                                    {plan.buttonText}
                                </button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}