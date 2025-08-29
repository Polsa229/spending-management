import React, { useState, useEffect } from 'react';
import Image1 from '../assets/Testimonials/1.png';
import Image2 from '../assets/Testimonials/2.png';
import Image3 from '../assets/Testimonials/3.png';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const testimonials = [
    {
        image: Image1,
        name: "Jimmy Bartney",
        job: "Product Manager at Picko Lab",
        title: `It's just incredible!`,
        content: `It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!`
    },
    {
        image: Image2,
        name: "Natasha Romanoff",
        job: "Black Widow",
        title: `Satisfied User Here!`,
        content: `Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!`
    },
    {
        image: Image3,
        name: "Moritika Kazuki",
        job: "Finance Manager at Mangan",
        title: `No doubt, Spend.In is the best!`,
        content: `"The best"! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!`,
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Fonction pour aller au témoignage précédent (par groupe de 3)
    const goToPrevious = () => {
        if (testimonials.length <= 3) return

        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.floor((testimonials.length - 1) / 3) * 3 : prevIndex - 3
        );
    };

    // Fonction pour aller au témoignage suivant (par groupe de 3)
    const goToNext = () => {
        if (testimonials.length <= 3) return
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) =>
            prevIndex >= Math.floor((testimonials.length - 1) / 3) * 3 ? 0 : prevIndex + 3
        );
    };

    // Défilement automatique
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            if (testimonials.length <= 3) return
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex >= Math.floor((testimonials.length - 1) / 3) * 3 ? 0 : prevIndex + 3
                );
            }, 5000); // Change toutes les 5 secondes
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Calcul des témoignages à afficher
    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

    return (
        <section className="bg-secondary700 text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10 grid grid-cols-1 md:grid-cols-12 gap-6 w-full items-center text-center">
                    <div className="md:col-span-8 md:col-start-3 text-center">
                        <p className="text-sm text-primary px-3 py-1 rounded-full block md:mb-3">
                            WHAT THEY SAY
                        </p>

                        <div className="grid grid-cols-1 gap-6 w-full mb-3 items-end">
                            <div>
                                <h1 className="text-5xl font-bold">
                                    Our User Kind Words
                                </h1>
                            </div>

                            <div>
                                <p className="text-[20px] leading-[150%] font-normal text-secondary300 tracking-[-0.02em]">
                                    Here are some testimonials from our user after using Spend.In to manage their business expenses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conteneur des témoignages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between w-full mb-8">
                    {visibleTestimonials.map((item, index) => (
                        <div
                            key={currentIndex + index}
                            className="bg-secondary500 text-white p-6 rounded-xl h-full"
                        >
                            {/* Quote */}
                            <h2 className="text-[18px] md:text-2xl font-bold mb-4">
                                {item.title}
                            </h2>
                            <p className="text-[16px] md:text-lg leading-relaxed text-secondary100 mb-6">
                                {item.content}
                            </p>

                            {/* Divider */}
                            <div className="border-t border-white/20 my-6"></div>

                            {/* Profile */}
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className={"text-sm text-secondary200"}>{item.job}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contrôles de navigation */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={goToPrevious}
                        className="bg-secondary500 rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors"
                        aria-label="Previous testimonials"
                    >
                        <IoArrowBack />
                    </button>


                    <button
                        onClick={goToNext}
                        className="bg-primary rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors"
                        aria-label="Next testimonials"
                    >
                        <IoArrowForward />
                    </button>
                </div>

            </div>
        </section>
    );
}