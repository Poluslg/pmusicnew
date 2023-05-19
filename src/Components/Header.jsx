import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, signOut } from "firebase/auth";

const navigation = [
  { name: "Home", link: "/afterlogin", current: true },
  { name: "Music", link: "/Music", current: false },
  { name: "Projects", link: "/projects", current: false },
  { name: "Contact", link: "/contact", current: false },
];

const BulbOn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="black"
      className="bi bi-lightbulb"
      viewBox="0 0 16 16"
    >
      <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
    </svg>
  );
};

const BulbOff = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="white"
      className="bi bi-lightbulb-off-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z" />
    </svg>
  );
};

// const Home = () => {
//   return (

//   );
// };

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("mode") &&
      localStorage.getItem("mode") === "dark"
    ) {
      toggleMode();
    }
  }, []);

  const toggleMenu = () => {
    const content = document.getElementById("content");
    if (content) {
      if (content.classList.contains("blur-[5px]")) {
        content.classList.remove("blur-[5px]");
      } else {
        content.classList.add("blur-[5px]");
      }
      setIsMenuOpen(!isMenuOpen);
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const toggleMode = () => {
    let html = document.getElementsByTagName("html")[0];
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
    setActiveMode((activeMode) => !activeMode);
  };

  const Bar = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    );
  };

  const Xmark = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  };

  // const navigate = useNavigate();
  // const HireMe = () => {
  //   window.location.href =
  //     "https://drive.google.com/file/d/1TAd0127dgJbHUZKLHWtEBWi2v6dJfusK/view";
  // };

  const navigate = useNavigate();
  const logout = () => {
    // localStorage.removeItem("googleToken");
    // localStorage.removeItem("spotifyToken");
    localStorage.removeItem("uid");
    navigate("/login");
  };

  return (
    <div className="sticky sm:relative z-[1] font-[Poppins]  h-fit">
      <header className="bg-white   dark:bg-slate-700 dark:border-slate-700 dark:shadow-cyan-500/30 ">
        <nav className="flex justify-between items-center w-[92%] mx-auto h-[3rem]">
          <div className=" z-[2] text-[15px]  font-[Poppins] dark:text-gray-300  ">
            <span>PMusic</span>
          </div>
          <div
            className={`nav-links  z-[1] duration-500 md:static absolute bg-white dark:bg-slate-700 md:min-h-fit pt-[5rem] pb-[3rem]  md:py-0 left-0 ${
              isMenuOpen ? "z-5  top-0 rounded-2xl " : "top-[-50vh] z-0  "
            } md:w-auto w-full flex items-center px-5 bg-stone-100 `}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8  ">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="hover:text-red-500 dark:hover:text-black dark:text-gray-300 transition ease-out delay-100 duration-500 "
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-6 z-[2]">
            <div>
              <button
                className="hover:text-red-500 dark:hover:text-black dark:text-gray-300 transition ease-out delay-100 duration-500 "
                onClick={logout}
              >
                logoout
              </button>
            </div>
            <div onClick={toggleMode} className=" cursor-pointer ">
              {activeMode ? <BulbOn /> : <BulbOff />}
            </div>
            <div className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <Xmark /> : <Bar />}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
