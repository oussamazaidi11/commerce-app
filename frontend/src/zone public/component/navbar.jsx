import React from "react";
import { Link } from "react-router-dom";
import { Store } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-end space-x-6 font-bold rounded p-1 text-xl">
      <div className=" mr-[76%] flex gap-2 text-2xl">
        <Store /> F-Art{" "}
      </div>
      <div className="hover:bg-sky-500 cursor-pointer  rounded ">Acceuil</div>
      <div className="hover:bg-sky-500 cursor-pointer">Contact</div>
      <div className="hover:bg-sky-500 cursor-pointer">Service</div>
      <div className="hover:bg-sky-500 cursor-pointer ">Autre</div>
    </div>
  );
};

export default Navbar;
