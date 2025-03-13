import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import panelImg from "../../assets/panelImg.webp"

const SolarScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotation & Scaling Effect
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]); // Full rotation on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Slight zoom-in effect
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves up slightly

  return (
    <div ref={containerRef} className="relative h-[200vh] flex justify-center items-center bg-black">
      <motion.img
        src={panelImg}
        alt="Futuristic Solar Panel"
        className="w-[500px] h-auto drop-shadow-lg"
        style={{ rotate, scale, y: yTranslate }}
      />
    </div>
  );
};

export default SolarScroll;
