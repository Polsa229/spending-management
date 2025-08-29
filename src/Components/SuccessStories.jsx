import React from 'react';
import tickCircle from '../assets/tickCircle.png';
import successStories from '../assets/successStories.png';

const checkList = [
    "Analyze your business cost easily with group transaction thorugh tagging feature.",
    "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
    "Arrange your business expenses by date, name, etc.,  with just one click."
];

export default function SuccessStories() {
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto">
                {/* Header */}<div className="mb-10">
                    <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                        INCREASE PRODUCTIVITY
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-end">
                        {/* Bloc titre sur 6 colonnes */}
                        <div className="md:col-span-8">
                            <h1 className="text-[40px] font-bold leading-tight">
                                Reduce Time in Doing Manual Work<br />
                                Managing Expenses
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-3">
                    {/* Benefits */}
                    <div className="space-y-8">
                        <p className="font-bold">
                            Track Business Expenses until its Milisecond
                        </p>
                        {checkList.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                    <img src={tickCircle} alt={"tick-circle"} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <p className="mt-2 text-[16px] leading-[150%] font-normal tracking-[-0.02em] text-gray-600  ">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-secondary100 h-full flex items-end w-full shadow-lg" style={{ borderRadius: "12px" }}>
                        <img src={successStories} alt="" className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
