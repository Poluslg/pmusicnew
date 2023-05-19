// import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Background from "./Background";

const Base = () => {
  return (
    <>
      <Header />
      <div
        id="content"
        className="sm:blur-0 z-[0] overflow-hidden scroll-smooth hover:scroll-auto md:scroll-auto"
      >
        {/* <div className="  absolute top-0 h-[100%] w-full">
          <Background />
        </div> */}
        <Outlet />
      </div>
    </>
  );
};

export default Base;
