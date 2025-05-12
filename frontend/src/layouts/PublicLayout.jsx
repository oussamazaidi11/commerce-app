import React from "react";
import Navbar from "../zone public/component/navbar";
import Footer from "../zone public/component/footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
