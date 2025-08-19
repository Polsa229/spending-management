import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionBtn = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#"
                className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-secondary before:to-secondary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
                Download the app
            </Link>

            <Link
                to="/#"
                className="px-8 py-2 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform bg-transparent border-2 border-white hover:scale-105 hover:border-secondary hover:shadow-secondary/50 hover:shadow-2xl focus:outline-none duration-300"
            >
                Talk to an expert
            </Link>

        </div >
    );
};

export default CallToActionBtn;