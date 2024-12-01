import React from "react";
import { motion } from "framer-motion";

const container = (xval) => ({
  hidden: { x: xval, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
});

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-700 lg:h-screen w-full flex justify-center items-center pb-20 lg:pb-0">
      <div className="flex lg:flex-wrap flex-wrap-reverse items-center pt-20 lg:pt-0">
        <motion.div
          variants={container(-100)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-1/2 lg:h-full lg:p-8"
        >
          <img
            src="./hero.jpg"
            alt="about img"
            className="h-[65vh] rounded-2xl object-cover brightness-50 hover:brightness-100 transition-colors cursor-pointer shadow-lg shadow-purple-950 mx-auto mt-8 lg:mt-0"
          />
        </motion.div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-center text-5xl pb-16">
            About <span className="text-neutral-500"> Me</span>
          </h2>
          <motion.p 
          variants={container(100)}
          initial="hidden"
          whileInView="visible"
          className="pt-6 my-2 max-w-xl py-6 text-justify lg:text-left">
           I’m Nikita Sharma, a 4th-year student at Ajay Kumar Garg Engineering College and a passionate Full Stack Developer with expertise in React, Java, Spring Boot, and Next.js. I’ve worked on impactful projects like RefactorMate and SponsorIn, integrating AI and modern technologies to solve real-world problems.

With experience as a Software Engineer at Shoppeal, I’m driven to explore deeper into frontend, backend, and AI to create meaningful solutions. Feel free to connect.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
