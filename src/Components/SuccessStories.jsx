import React, { useState } from 'react';
import tickCircle from '../assets/tickCircle.png';
import closeCircle from "../assets/closeCircle.png"
import successStories from '../assets/successStories.png';
import successStoriesWithOutSpenIn from '../assets/successStoriesWithOutSpenIn.png';
import { motion } from 'framer-motion';

const checkList = [
    "Analyze your business cost easily with group transaction thorugh tagging feature.",
    "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
    "Arrange your business expenses by date, name, etc.,  with just one click."
];
const closeList = [
    "Complex recording process due to every administrative file in a different place.",
    "Need more effort to pay manually one by one invoice because there is no payment accommodation.",
    "Manual data arranging needs a long time because the different months/years are not in the same place."
];

export default function SuccessStories() {

    const [active, setActive] = useState('with');
    const list = active === 'with' ? checkList : closeList;

    const image = active === 'with' ? successStories : successStoriesWithOutSpenIn;
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                        INCREASE PRODUCTIVITY
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-end">
                        {/* Bloc titre sur 6 colonnes */}
                        <div className="md:col-span-7">
                            <h1 className="text-[30px] font-bold leading-tight">
                                Reduce Time in Doing Manual Work
                                <br />
                                Managing Expenses
                            </h1>
                        </div>
                    </div>
                </div>



                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-3 cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(event, info) => {
                        if (info.offset.x < -50) {
                            setActive('without'); // swipe left
                        } else if (info.offset.x > 50) {
                            setActive('with'); // swipe right
                        }
                    }}
                >

                    <div className="space-y-8">
                        <div className="bg-gray-100 rounded-full p-1 flex w-fit">
                            {/* Container */}
                            <div className="relative flex gap-1">
                                {/* Buttons */}
                                <button
                                    onClick={() => setActive('with')}
                                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === 'with' ? 'bg-primary text-white' : 'hover:bg-primary text-secondary-300'
                                        }`}
                                >
                                    With Spend.In
                                </button>
                                <button
                                    onClick={() => setActive('without')}
                                    className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === 'without' ? 'bg-primary text-white' : 'hover:bg-primary text-secondary-300'
                                        }`}
                                >
                                    Without Spend.In
                                </button>
                            </div>
                        </div>


                        <p className="font-bold">
                            Track Business Expenses until its Milisecond
                        </p>
                        {list.map((item, index) => (
                            <div key={index} className="flex items-start gap-x-3">
                                <img src={active === 'with' ? tickCircle : closeCircle} alt={"tick-circle"} className="w-6 h-6 " />
                                <div>
                                    <p className="text-[16px] leading-[150%] font-normal tracking-[-0.02em] text-gray-600  ">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`bg-secondary-100 h-full flex items-end w-full shadow-md transition-transform hover:scale-[1.02] duration-300 ${active === 'with' ? "hover:shadow-[green]" : "hover:shadow-[red]"}`} style={{ borderRadius: "12px" }}>
                        <img src={image} alt="" className="object-contain select-none" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
