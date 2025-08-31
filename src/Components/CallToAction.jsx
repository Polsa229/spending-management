import React from 'react';
import callToAction from '../assets/CallToAction.png';


export default function CallToAction() {
    return (
        <section className="bg-secondary700 text-white px-3">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full pt-16 ">
                    <div className="pb-4">
                        {/* Header */}
                        <div className="mb-3">
                            <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                                DOWNLOAD NOW!
                            </p>
                            <div className="grid grid-cols-1 gap-6 w-full mb-3 items-end ">
                                {/* Bloc titre */}
                                <div className="">
                                    <h1 className="text-5xl font-bold">
                                        Start Track Your Business
                                        Expenses Today
                                    </h1>
                                </div>

                                {/* Bloc paragraphe */}
                                <div className="">
                                    <p className="text-[20px] leading-[150%] font-normal text-secondary300 tracking-[-0.02em]">
                                        Are you ready to make your business more organized? Download Spend.In now!
                                    </p>
                                </div>
                            </div>

                            <button className="bg-primary text-white hover:bg-secondary500 hover:text-primary px-4 py-2 rounded-full transition">
                                Get a Free Demo
                            </button>
                        </div>
                    </div>

                    <div className="bg-secondary100 h-full flex items-end w-full shadow-lg" style={{ borderRadius: "12px" }}>
                        <img src={callToAction} alt="" className="object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}
