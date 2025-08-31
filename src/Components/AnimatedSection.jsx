import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, delay = 0, zIndex = 10 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 100, zIndex },
                visible: {
                    opacity: 1,
                    y: 0,
                    zIndex,
                    transition: { duration: 0.6, ease: 'easeOut', delay },
                },
            }}
            style={{ position: 'relative', zIndex }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
