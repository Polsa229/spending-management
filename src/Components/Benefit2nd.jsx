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
        <section
            className="relative w-full h-full flex justify-center bg-white mx-auto px-4"
        // className="flex justify-center min-h-screen px-3"
        >

            <div className="max-w-[319px] md:max-w-[1200px] mb-3">
                {/* Header */}
                <div className="relative w-full mx-auto pt-[32px] md:pt-[120px] md:text-center">
                    {/* Texte 1 */}

                    <p className="font-semibold text-primary leading-[150%] tracking-[-0.02em] text-base md:text-[20px] py-1 rounded-full block mb-4 md:mb-3">
                        WHY USE SPEND.IN
                    </p>
                    <div className='w-full mt-[6px] md:mt-[12px] '>
                        {/* Titre */}
                        <h1 className="font-bold text-secondary900 leading-[150%] tracking-[-0.03em] text-[24px] md:text-[40px]">
                            Easy, Simple,
                            <br className='flex md:hidden' />
                            Affordable
                        </h1>
                        {/* Paragraphe */}
                        <p className="mt-[12px] md:mt-[24px] text-[16px] md:text-[20px] leading-[150%] font-normal text-gray-700 tracking-[-0.02em] max-w-[314px] md:max-w-[712px] md:ml-[408px]">
                            Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-[32px] md:mt-[64px]">
                    {/* Benefits */}
                    <div className="space-y-8">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-purple-100 rounded-lg flex items-center justify-center">
                                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-[20px] md:text-[22px] font-semibold text-black   tracking-[-0.02em] leading-[150%]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-[16px] leading-[150%] font-normal tracking-[-0.02em] text-gray-600  ">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-secondary-100 h-full flex items-end w-full shadow-lg" style={{ borderRadius: "12px" }}>
                        <img src={benefit2nd} alt="" className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}
