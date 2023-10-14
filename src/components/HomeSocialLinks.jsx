import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      key={index}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ delay: index * 0.1 }}
      href={data.uri}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary relative p-[2px]"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-2 blur-lg bg-gradient-to-tr from-primary to-secondary -z-10`}
          ></motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-full rounded-full bg-bgPrimary flex items-center justify-center">
        <data.Icon
          className={` duration-200  ${
            isHovered ? data?.color : "text-texlight"
          }`}
        />
      </div>
    </motion.a>
  );
};

export default HomeSocialLinks;
