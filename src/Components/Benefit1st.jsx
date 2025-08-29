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
        <div className="flex justify-center min-h-screen px-3">

            <div className="mt-10 mb-3 max-w-3xl">
                <div>
                    <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                        WHY USE SPEND.IN
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-9 gap-6 w-full mb-3 items-end ">
                        {/* Bloc titre */}
                        <div className="md:col-span-4">
                            <h1 className="text-5xl font-bold">
                                Easy, Simple,
                                Affordable
                            </h1>
                        </div>

                        {/* Bloc paragraphe */}
                        <div className="md:col-span-5 ">
                            <p className="text-[20px] leading-[150%] font-normal text-gray-700 tracking-[-0.02em]">
                                Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-3">
                    {benefit1stCard.map((item, key) => (
                        <div
                            key={key}
                            className="flex flex-col h-full bg-white rounded-lg transition-transform hover:scale-[1.02] duration-300 hover:shadow-primary"
                        >
                            {/* Image */}
                            <div className="mb-4">
                                <img src={item.image} alt="" className="shadow-lg" />
                            </div>

                            {/* Titre + Description */}
                            <div className="flex flex-col flex-grow items-start justify-start">
                                <h3 className="text-[24px] leading-[150%] font-semibold tracking-[-0.03em] text-secondary900 font-plusjakarta min-h-[72px]">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-[16px] leading-[150%] font-normal tracking-[-0.02em] text-secondary400 font-plusjakarta">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


            </div>


        </div>
    );
};

export default Benefit1st;