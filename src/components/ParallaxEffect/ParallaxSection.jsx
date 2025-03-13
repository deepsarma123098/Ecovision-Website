import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = ({ backgroundImage, midgroundImage, foregroundImage, children }) => {
    const ref = useRef(null);
    const { scrollY } = useScroll(); // Get actual scroll position

    // Scroll-based movement for parallax effect
    const backgroundY = useTransform(scrollY, [0, 700], [0, -250]); // Slow movement
    const midgroundY = useTransform(scrollY, [0, 700], [0, -400]); // Faster movement
    const foregroundY = useTransform(scrollY, [0, 700], [0, -600]); // Fastest movement

    return (
        <div ref={ref} className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center">
            {/* Background Layer */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    y: backgroundY, // Apply parallax motion
                }}
            />

            {/* Midground Layer */}
            {midgroundImage && (
                <motion.div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: `url(${midgroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: midgroundY,
                    }}
                />
            )}

            {/* Foreground Layer */}
            {foregroundImage && (
                <motion.div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: `url(${foregroundImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        y: foregroundY,
                    }}
                />
            )}

            {/* Foreground Content */}
            <div className="relative z-10 w-full flex flex-col items-center text-white text-center p-6">
                {children}
            </div>
        </div>
    );
};

export default ParallaxSection;
