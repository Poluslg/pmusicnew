import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <>
      <Outlet />
      {/* <div
        id="content"
        className="sm:blur-0 z-[0] overflow-hidden scroll-smooth hover:scroll-auto md:scroll-auto"
      >
      
      </div> */}
    </>
  );
};

export default Base;
