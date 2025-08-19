import React, { useMemo } from 'react';
import Wrapper from "../assets/Patners/Logo_Wrapper.png"
import Wrapper1 from "../assets/Patners/Logo_Wrapper-1.png"
import Wrapper2 from "../assets/Patners/Logo_Wrapper-2.png"
import Wrapper3 from "../assets/Patners/Logo_Wrapper-3.png"
import Wrapper4 from "../assets/Patners/Logo_Wrapper-4.png"
import Wrapper5 from "../assets/Patners/Logo_Wrapper-5.png"
import Wrapper6 from "../assets/Patners/Logo_Wrapper-6.png"

const PatnersStack = () => {
    const patners = useMemo(() => (
        [
            Wrapper,
            Wrapper1,
            Wrapper2,
            Wrapper3,
            Wrapper4,
            Wrapper5,
            Wrapper6,
        ]
    ), [])
    return (
        <section id="patners" className="w-full flex justify-center">
            <div className="max-w-4xl">
                <p className="mb-4 text-[#ECECECA6] text-base md:text-lg">
                    Trusted by teams at over 1,000 of the world’s leading organizations
                </p>
                <div className="flex justify-between items-center px-6 py-4">
                    {
                        patners.map((img, key) => {
                            return (
                                <img key={key} src={img} alt={`patner ${key}`} />
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
};

export default PatnersStack;