import React from 'react';
import Icon1 from '../assets/Benefit2nd/1.png';
import Icon2 from '../assets/Benefit2nd/2.png';
import Icon3 from '../assets/Benefit2nd/3.png';
import benefit2nd from '../assets/benefit2nd.png';

const benefits = [
    {
        icon: Icon1,
        title: 'Automatic Invoice Payment',
        description:
            "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!",
    },
    {
        icon: Icon2,
        title: 'Clear payment history',
        description:
            "Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!",
    },
    {
        icon: Icon3,
        title: 'Use of multi-card payments',
        description:
            "Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!",
    },
];

export default function SpendBenefits() {
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="text-center">
                        <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                            WHY USE SPEND.IN
                        </p>
                        <div className="grid grid-cols-1 gap-6 w-full mb-3 items-end ">
                            {/* Bloc titre */}
                            <div className="">
                                <h1 className="text-5xl font-bold">
                                    Easy, Simple,
                                    Affordable
                                </h1>
                            </div>

                            {/* Bloc paragraphe */}
                            <div className="">
                                <p className="text-[20px] leading-[150%] font-normal text-gray-700 tracking-[-0.02em]">
                                    Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-3">
                    {/* Benefits */}
                    <div className="space-y-8">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-purple-100 rounded-lg flex items-center justify-center p-2">
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-[20px] md:text-[22px] font-semibold text-black font-plusjakarta tracking-[-0.02em] leading-[150%]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-[16px] leading-[150%] font-normal tracking-[-0.02em] text-gray-600 font-plusjakarta">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-secondary100 h-full flex items-end w-full shadow-lg" style={{ borderRadius: "12px" }}>
                        <img src={benefit2nd} alt="" className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
