import React, { useState } from "react";
import { Sparkle, Tag } from "lucide-react";

const Profile = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <div className="flex justify-center mt-10 mr-2 font-bold shadow-lg shadow-green-400 text-3xl gap-3">
        <span>Welcome to F-Art space</span>
        <button
          className="hover:text-lime-600"
          onClick={() => {
            setvisible(true);
          }}
        >
          <Tag size={30} />
        </button>
      </div>
      {visible && (
        <div
          id="side bar"
          className="bg-green-400/20 text-center w-[250px] h-[400px] border rounded-e-md font-bold mt-40 shadow-xl  shadow-emerald-800  "
        >
          <div className="mr-52 text-red-400 hover:text-red-600">
            <button
              onClick={() => {
                setvisible(false);
              }}
            >
              X
            </button>
          </div>
          <div className="space-y-4">
            <span>local adresse</span>

            <input
              type="text"
              className="border rounded-full shadow-md shadow-emerald-800"
            />
          </div>
          <div className="space-y-4 mt-5">
            <span className="mb-10 ">phone number</span>

            <input
              type="text"
              className="border rounded-full shadow-md shadow-emerald-800"
            />
          </div>

          <button className=" flex ml-24 border  border-neutral-900 rounded-full p-2 mt-20 shadow-lg bg-emerald-400 hover:scale-90 hover:bg-lime-300 ">
            Get strated <Sparkle />
          </button>
        </div>
      )}

      <div id="content"></div>
    </div>
  );
};

export default Profile;
