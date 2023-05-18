import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Background from "./Background";

const Base = () => {
  return (
    <>

      {/* <div className="  absolute top-0 h-[100%] w-full">
          <Background />
        </div> */}
      <Outlet />

    </>
  );
};

export default Base;