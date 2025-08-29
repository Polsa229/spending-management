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
        <section className="bg-secondary700 text-white py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10 text-center">
                    <div className="text-center">
                        <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
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
                                <p className="text-[20px] leading-[150%] font-normal text-secondary300 tracking-[-0.02em]">
                                    In just few easy step, you are all set to manage your business finances.
                                    Manage all expenses with Spend.In all in one place.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between w-full mb-3">
                    {benefits.map((item, key) => (
                        <div
                            key={key}
                            className="relative flex flex-col h-full rounded-lg transition-transform hover:scale-[1.02] duration-300 hover:shadow-primary"
                            style={{
                                maxWidth: "225px"
                            }}
                        >
                            {/* Image */}
                            <div className="mb-4 bg-primary p-2 flex items-center justify-center absolute -top-7 -left-7"
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
                            <img src={item.image} alt="" className="object-contain" />
                            <p className="text-[20px] leading-[150%] font-medium tracking-[-0.02em] text-center">
                                {item.title}
                            </p>

                        </div>
                    ))}
                </div>

                <div className="mt-8 md:mt-6">
                    <CallToActionBtn />
                </div>
            </div>
        </section>
    );
}
