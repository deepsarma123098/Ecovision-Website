import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-90 dark:text-white"
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ children }) => {
  const [active, setActive] = useState(null);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-6 py-4"
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { setActive, active })
      )}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={120}
        height={60}
        alt={title}
        className="shrink-0 rounded-md shadow-lg"
      />
      <div>
        <h4 className="text-lg font-bold mb-1 text-black dark:text-white">{title}</h4>
        <p className="text-gray-700 text-sm max-w-[9rem] dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <Link
      {...rest}
      className="text-gray-700 dark:text-gray-200 hover:text-black"
    >
      {children}
    </Link>
  );
};

export default Menu;
