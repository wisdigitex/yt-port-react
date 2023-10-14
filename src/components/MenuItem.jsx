import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ menu, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={menu.uri}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-12 h-12 rounded-full flex items-center justify-center group cursor-pointer hover:bg-gradient-to-r hover:from-primary hover:to-secondary relative"
    >
      <menu.Icon
        className={`${isHovered ? "text-bgPrimary" : "text-texlight"} text-xl`}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
            className=" hidden lg:block absolute -left-[140px] bg-white rounded-md px-6 py-2 after:absolute after:-right-1 after:top-3 after:rotate-45 after:w-3 after:h-3 after:bg-white"
          >
            <p className="text-bgPrimary">{menu?.name}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
