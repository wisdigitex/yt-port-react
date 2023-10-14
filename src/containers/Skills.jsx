import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <img
            src={Leaf2}
            className="w-6 h-auto object-contain rotate-210"
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wider text-justify">
          Game Development: With a strong foundation in creating immersive experiences, 
          I specialize in crafting captivating Roblox games. Deep understanding of player 
          motivations and how to translate them into engaging mechanics.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
          Actively gather and incorporate player feedback to refine and perfect gameplay experiences.
          I oversaw the development of [Specific Game or Project, e.g., "AdventureLand"], managing a team of [X number] 
          and successfully launching the game to [X number] of players. Tobally Game/Adventure, 2014-2016 
          Here, I worked as a [Senior dev] and was pivotal in 
          [Specific Achievement, e.g., "boosting the game's performance and user engagement by 20%"].
          </p>

          <p className="text-texlight text-base tracking-wider text-justify">
          Different games and platforms may prioritize certain languages over others. For example, 
          C# is commonly used with Unity, while Lua is the primary scripting language for Roblox.
          I believe in the power of games to connect, entertain, and inspire. 
          Let's collaborate and shape the future of gaming together!
          </p>
        </div>

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <SkillCard
            skill={"Roblox & Unity Game"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />

          <SkillCard skill={"C# & C++ & CSS 3"} percentage={"75%"} color={"#008FFF"} />

          <SkillCard
            skill={"Javascript & TypeScript"}
            percentage={"85%"}
            color={"#FFB900"}
            move={true}
          />

          <SkillCard skill={"Node Js & Python"} percentage={"80%"} color={"#14DB00"} />

          <SkillCard
            skill={"Lua & NextJs"}
            percentage={"90%"}
            color={"#00FFF3"}
            move={true}
          />

          <SkillCard
            skill={"Mongo DB & Firebase"}
            percentage={"75%"}
            color={"#FFE400"}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
