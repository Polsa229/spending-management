import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
    return (
        <section
            className="bg-primary min-h-screen flex flex-col items-center justify-center"
        >
            <div className="grid grid-cols-12 gap-4 mt-12 px-4 max-w-5xl justify-center">
                <div className="col-span-5 col-start-4 text-center">
                    <h1 className="text-6xl font-[400px] mb-2 text-white">
                        Features that work for your future.
                    </h1>
                    <p className="mt-4 text-lightOverlay text-base md:text-lg">
                        Check out our amazing features and experience the power of Vaultflow for yourself.
                    </p>
                </div>
            </div>


            <div className="flex flex-col items-center mb-6 z-10">
                <FeatureCard />
            </div>
        </section>
    );
};

export default FeaturesSection;
