import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";

export const TypewriterEffect = ({ words = "", className = "", cursorClassName = "" }) => {
  // Ensure words is always an array of objects with a text property
  const wordsArray =
    typeof words === "string" ? words.split(" ").map((word) => ({ text: word })) : words;

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.split("").map((char, index) => (
            <motion.span
              key={`char-${index}`}
              initial={{ opacity: 0 }}
              className={`hidden opacity-0 mix-blend-difference dark:text-white text-black ${word.className || ""}`}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className={`text-4xl sm:text-base md:text-xl lg:text-4xl xl:text-[9vw] font-bold text-center my-4 sm:my-6 md:my-8 ${className} w-[89%]`}>
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`inline-block rounded-sm w-[2px] h-4 sm:h-5 md:h-6 lg:h-8 xl:h-10 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({ words = "", className = "", cursorClassName = "" }) => {
  // Ensure words is always an array of objects with a text property
  const wordsArray =
    typeof words === "string" ? words.split(" ").map((word) => ({ text: word })) : words;

  const renderWords = () => (
    <div>
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.split(" ").map((char, index) => (
            <span key={`char-${index}`} className={`mix-blend-difference dark:text-white text-black ${word.className || ""}`}>
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={`flex space-x-1 my-4 sm:my-6 md:my-8 ${className}`}>
      <motion.div
        className="overflow-hidden pb-1 sm:pb-2"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{ duration: 2, ease: "linear", delay: 1 }}
      >
        <div className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-xl font-bold" style={{ whiteSpace: "nowrap" }}>
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={`block rounded-sm w-[2px] h-4 sm:h-5 md:h-6 lg:h-8 xl:h-10 bg-blue-500 ${cursorClassName}`}
      ></motion.span>
    </div>
  );
};
