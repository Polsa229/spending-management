import React from 'react';

import howToWorks2nd from '../assets/HowToWorks2nd.png';

const howToWorkdata = [
    {
        text: "Register your Spend.In account.",
        lineStyle: "bg-gradient-to-b from-primary-500 to-primary-500/90",
    },
    {
        text: "Fill in the list of your business expenses.",
        lineStyle: "border-l-2 border-dashed border-white",
    },
    {
        text: "Done, let's continue the work.",
        lineStyle: null,
    },

];

export default function HowItWorks2nd() {
    return (
        <section className="bg-secondary-700 text-white py-16 px-6 md:px-20">
            <div className=" max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-3">
                    {/* How to works 2nd */}
                    <div className="bg-secondary--100 h-full flex items-end w-full shadow-lg" style={{ borderRadius: "12px" }}>
                        <img src={howToWorks2nd} alt="" className="object-contain" />
                    </div>

                    <div>
                        <div className="">
                            {/* Header */}
                            <div className="text-center mb-3">
                                <p className="text-sm text-primary-500 px-3 py-1 rounded-full block md:mb-3">
                                    HOW IT WORKS
                                </p>
                                <div className="grid grid-cols-1 gap-6 w-full mb-3 items-end ">
                                    {/* Bloc titre */}
                                    <div className="">
                                        <h1 className="text-5xl font-bold">
                                            Few Easy Steps and Done
                                        </h1>
                                    </div>

                                    {/* Bloc paragraphe */}
                                    <div className="">
                                        <p className="text-[20px] leading-[150%] font-normal text-secondary--300 tracking-[-0.02em]">
                                            In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 bg-secondary--500">
                            {howToWorkdata.map((step, index) => (
                                <div key={index} className="flex items-start gap-x-6 relative">
                                    {/* Number + Line */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${index === 2
                                                ? "bg-white text-black"
                                                : "bg-gradient-to-br from-primary-500 to-primary-500/100 text-white"
                                                }`}
                                        >
                                            {index + 1}
                                        </div>

                                        {step.lineStyle && (
                                            <div className={`h-12 w-[2px] mt-1 ${step.lineStyle}`}></div>
                                        )}
                                    </div>

                                    {/* Text */}
                                    <p className="text-lg font-medium leading-[150%] tracking-[-0.02em]">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
