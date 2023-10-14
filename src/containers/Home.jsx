import React from "react";
import { Hero } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { HeroTypeWritter, HomeSocialLinks } from "../components";

import { FaFacebookF } from "react-icons/fa6";
import { Socials } from "../utils/helper";
import { ParticlesContainer } from "./";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white ">
              Sulaimon .G
            </span>
          </h2>

          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              words={["a Game Dev..", "Software Dev..", "a Freelanzer.."]}
              speed={100}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
          a dedicated game developer with over 5 years of experience. 
          My journey spans from conceptualizing intricate game mechanics to bringing immersive experiences to life, 
          with a particular passion for Roblox games. I believe in crafting games that captivate, engage, and provide 
          players with memorable moments. Outside of coding, I'm deeply involved in gathering player feedback and 
          immersing myself in gaming communities to ensure my creations resonate. Let's collaborate and shape the future of gaming together!
          </p>

          {/* social  media links */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="https://wa.me/message/FQ53HO3DD2B6M1"
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3  active:scale-95 group hover:border-primary"
            style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.3)" }}
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary capitalize text-lg font-serif tracking-widest">
              Let's Chat
            </p>
          </a>
        </div>
        <div className="w-full h-full flex items-start lg:items-center justify-center">
          <AnimatePresence>
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }} // Use an array of values for smooth up and down motion
              transition={{
                repeat: Infinity, // Repeat the animation infinitely
                duration: 2, // Duration of each cycle (4 seconds)
                ease: "linear", // Linear easing for smooth motion
              }}
              src={Hero}
              alt=""
              className="w-auto h-auto object-contain"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Home;
