import React from 'react';
import Image1 from '../assets/HowToWorks1st/1.png';
import Image2 from '../assets/HowToWorks1st/2.png';
import Image3 from '../assets/HowToWorks1st/3.png';
import CallToActionBtn from './CallToActionBtn';

const benefits = [
    {
        image: Image1,
        title: `Register your Spend.In account.`
    },
    {
        image: Image2,
        title: `Fill in the list of your business expenses.`
    },
    {
        image: Image3,
        title: `Done, let's continue the work.`
    },
];

export default function HowItWorks1st() {
    return (
        <section className="bg-secondary-700 text-white py-16 px-6 md:px-20">
            <div className="mx-auto my-auto ">
                {/* Header */}
                <div className="mb-10">
                    <div className="md:text-center">
                        <p className="text-[12px] md:text-[24px] text-primary-500 px-3 py-1 rounded-full block mb-[6px] md:mb-[12px]">
                            HOW IT WORKS
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-3">
                            <div className="md:col-span-8 md:col-start-3 bg-secondary-700 mx-auto px-4 mb-[12px] md:mb-[24px]">
                                {/* Bloc titre */}
                                <div className="mb-[12px] md:mb-[24px]">
                                    <h1 className="text-[24px] md:text-[48px] font-bold">
                                        Few Easy Steps and Done
                                    </h1>
                                </div>
                                {/* Bloc paragraphe */}
                                <div className="mb-[12px] md:mb-[24px]">
                                    <p className="text-[14px] md:text-[20px] leading-[150%] font-normal text-secondary-300 tracking-[-0.02em]">
                                        In just few easy steps, you are all set to manage your business finances.
                                        Manage all expenses with Spend.In all in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center md:justify-between gap-[56px] md:gap-[64px] w-full mt-[48px] md:mt-[39px]">
                        {benefits.map((item, key) => (
                            <div
                                key={key}
                                className="relative flex flex-col h-full w-[200px] mx-auto rounded-lg transition-transform hover:scale-[1.02] duration-300 hover:shadow-primary-500"

                            >
                                {/* Image */}
                                <div className="mb-4 bg-primary-500 p-2 flex items-center justify-center absolute -top-7 -left-7"
                                    style={{
                                        borderRadius: '50px',
                                        border: "6px solid #0D121F",
                                        width: 50,
                                        height: 50,
                                        opacity: 1,
                                    }}
                                >
                                    <h3 className="font-bold">{key + 1}</h3>
                                </div>

                                {/* Titre + Description */}
                                <img src={item.image} alt="" className="object-contain h-[200px]"
                                />
                                <p className="text-[14px] md:text-[20px] text-primary-100 leading-[150%] font-medium tracking-[-0.02em] text-center">
                                    {item.title}
                                </p>

                            </div>
                        ))}
                    </div>

                    <div className="mt-[56px] md:mt-[64px] ">
                        <CallToActionBtn />
                    </div>
                </div>
            </div>
        </section>
    );
}
