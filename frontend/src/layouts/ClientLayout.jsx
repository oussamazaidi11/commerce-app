import React from "react";
import { Outlet } from "react-router-dom";
import { LogOut, User, Menu, Settings, Box, UserCog } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ClientLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(deleteUser());
    navigate("/login");
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex h-screen">
      <div id="sidebar" className=" p-2 basis-[25%] shadow">
        <div className="flex gap-2 font-bold ">
          <User /> <span>Zone Client</span>
        </div>
        <div id="links" className="mt-9 space-y-10">
          <a href="" className="flex gap-1 text-sm hover:text-blue-600">
            <Settings size={18} />
            <span>Change password</span>
          </a>
          <a href="" className="flex gap-1 text-sm hover:text-blue-600">
            <Box size={18} />
            Verify order
          </a>
          <a href="" className="flex gap-1 text-sm hover:text-blue-600">
            <UserCog size={18} />
            Contact admin
          </a>
        </div>
      </div>
      <div id="left" className="flex-1">
        <div
          id="navbar"
          className="bg-white h-12 shadow p-2 flex justify-between items-center"
        >
          <button>
            <Menu />
          </button>
          <div>
            <span>Bonjour,{user.name}</span>
            <button onClick={handleLogOut}>
              <LogOut />
            </button>
          </div>
        </div>
        <div id="content" className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
