import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
 
  return (
    <div className="w-full h-auto fixed top-0 left-0 px-8 lg:px-16 z-50 backdrop-blur-2xl flex items-center justify-between py-6">
      <div className="text-4xl hover:scale-110 transition-all cursor-pointer">
        <a href="/#hero" className="logo-animation"> Nikita Sharma</a>
      </div>
      <div className="flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/nikita-a339b119b/" target="_blank">
          <FaLinkedin className="hover:text-white hover:scale-105 transition-all cursor-pointer" />
        </a>
        <a href="https://github.com/nikita110602" target="_blank">
          <FaGithub className="hover:text-white hover:scale-105 transition-all cursor-pointer" />
        </a>
        <a href="https://github.com/nikita110602" target="_blank">
          <FaFacebook className="hover:text-white hover:scale-105 transition-all cursor-pointer" />
        </a>
      
        
      </div>
    </div>
  );
};

export default Navbar;
