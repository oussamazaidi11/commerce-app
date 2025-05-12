import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="  bg-slate-800 text-white">
      <div
        id="social_icons"
        className=" pt-5 p-2 flex gap-2 justify-center items-center"
      >
        <Facebook size={18} /> <Instagram size={18} /> <Linkedin size={18} />
      </div>
      <div
        id="infoBlock"
        className="p-2 grid  grid-cols-2 md:grid-cols-4 gap-3 place-items-center "
      >
        <div id="info">
          <h2>M art</h2>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil
          </p>
        </div>
        <div id="list1">
          <ul className="text-xs">
            <li>Services</li>
            <li>Consulting</li>
            <li>Deploiment</li>
            <li>Maintenance</li>
          </ul>
        </div>
        <div id="list2">
          <ul className="text-xs">
            <li>Services</li>
            <li>Consulting</li>
            <li>Deploiment</li>
            <li>Maintenance</li>
          </ul>
        </div>
        <div id="list3">
          <ul className="text-xs">
            <li>Services</li>
            <li>Consulting</li>
            <li>Deploiment</li>
            <li>Maintenance</li>
          </ul>
        </div>
      </div>
      <div id="copyright" className="p-1 text-xs flex justify-center">
        &copy; Copyright 2024 <span className="ml-1"></span>
      </div>
    </div>
  );
};

export default Footer;
