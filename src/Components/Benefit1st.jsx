import React from 'react';
import Benefit1st1 from "../assets/Benefit1st/1.png";
import Benefit1st2 from "../assets/Benefit1st/2.png";
import Benefit1st3 from "../assets/Benefit1st/3.png";


const benefit1stCard = [
    {
        image: Benefit1st1,
        title: 'Automatic Invoice Payment',
        description: `No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!`,
        link: "/#",
    },
    {
        image: Benefit1st2,
        title: 'Clear payment history',
        description: `Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!`,
        link: "/#",
    },
    {
        image: Benefit1st3,
        title: 'Use of multi-card payments',
        description: `Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!`,
        link: "/#",
    },
];

const Benefit1st = () => {

    return (
        <section
            className="relative w-full max-w-[1440px] h-full bg-white mx-auto px-4"
        // className="flex justify-center min-h-screen px-3"
        >

            <div className="mt-[32px] md:mt-[120px] mb-3">
                <div className="relative w-full mx-auto pt-[32px] md:pt-[120px]">
                    {/* Texte 1 */}

                    <p className="font-semibold text-primary leading-[150%] tracking-[-0.02em] text-base md:text-[20px] py-1 rounded-full block mb-4 md:mb-3">
                        WHY USE SPEND.IN
                    </p>
                    <div className='md:flex w-full mt-[6px] md:mt-[12px] '>
                        {/* Titre */}
                        <h1 className="font-bold text-secondary900 leading-[150%] tracking-[-0.03em] text-[24px] md:text-[40px]">
                            Easy, Simple,
                            <br />
                            Affordable
                        </h1>

                        {/* Paragraphe */}
                        <p className="mt-[12px] md:mt-0 text-[16px] md:text-[20px] leading-[150%] font-normal text-gray-700 tracking-[-0.02em] max-w-[314px] md:max-w-[496px] md:ml-[408px]">
                            Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                        </p>
                    </div>
                </div>

                <div className="mt-[32px] md:mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[24px] w-full mb-3">
                    {benefit1stCard.map((item, key) => (
                        <div
                            key={key}
                            className="w-[319px] md:w-[384px] flex flex-col h-full bg-white rounded-lg transition-transform hover:scale-[1.02] duration-300 hover:shadow-primary"
                        >
                            {/* Image */}
                            <div className="mb-[24px]">
                                <img src={item.image} alt="" className="w-[319px] h-[319px] md:w-[384px] md:h-[384px]"
                                    style={{
                                        borderRadius: "12px"
                                    }}
                                />
                            </div>

                            {/* Titre + Description */}
                            <div className="flex flex-col flex-grow items-start justify-start">
                                <h3 className="text-[24px] leading-[150%] font-semibold tracking-[-0.03em] text-secondary900">
                                    {item.title}
                                </h3>
                                <p className="mt-[12px] text-[16px] leading-[150%] font-[12px] md:font-[16px] tracking-[-0.01em] md:tracking-[-0.02em] text-secondary400 ">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefit1st;