import React from "react";
import { Leaf1, Leaf2, about } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            About
          </p>
          <img
            src={Leaf2}
            className="w-6 h-auto object-contain rotate-210"
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className=" w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wider text-justify">
          Hi, I'm Sulaimon Ganiyu, a dedicated game developer with over 5 years of experience.
          My journey spans from conceptualizing intricate game mechanics to bringing immersive 
          experiences to life, with a particular passion for Roblox games.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
          I believe in crafting games that captivate, engage, and provide players with memorable moments. 
          Outside of coding, I'm deeply involved in gathering player feedback and immersing myself in gaming 
          communities to ensure my creations resonate.
          </p>

          <p className="text-texlight text-base tracking-wider text-justify">
          I'm not in the throes of debugging or mapping out a new game world, I enjoy 
          [personal hobbies, e.g., "sketching, hiking in the great outdoors, and delving into the lore of fantasy novels"].
          </p>

          <p>
          Let's embark on the next gaming adventure together. 
          Feel free to reach out if you're interested in collaborating, or just to chat about the latest gaming trends!

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
