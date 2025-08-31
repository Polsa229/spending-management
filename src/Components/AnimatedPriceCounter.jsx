import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedPriceCounter = ({ targetPrice }) => {
    const [displayedPrice, setDisplayedPrice] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0 });

        let start = 0;
        const duration = 1000; // ms
        const increment = targetPrice / (duration / 16); // approx 60fps
        const interval = setInterval(() => {
            start += increment;
            if (start >= targetPrice) {
                start = targetPrice;
                clearInterval(interval);
            }
            setDisplayedPrice(Math.round(start));
        }, 16);

        return () => clearInterval(interval);
    }, [targetPrice, controls]);

    return (
        <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="text-4xl font-extrabold"
        >
            ${displayedPrice}
        </motion.span>
    );
};

export default AnimatedPriceCounter;
