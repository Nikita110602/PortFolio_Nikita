import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-700 pb-10" id="con">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: 100 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        initial={{ opacity: 0, y: 50 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4">nikitasharma110602@gmail.com</p>
        <p className="my-4">+919354040249</p>
      </motion.div>
    </div>
  );
};

export default Contact;
