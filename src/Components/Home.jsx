import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", link: "/", current: true },
  { name: "Contact", link: "/contact", current: false },
];

const BulbOn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#9ca0a3"
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
      fill="black"
      className="bi bi-lightbulb-off-fill"
      viewBox="0 0 16 16"
    >
      <path d="M2 6c0-.572.08-1.125.23-1.65l8.558 8.559A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.303 4.181L3.818 1.697a6 6 0 0 1 8.484 8.484zM5 14.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5zM2.354 1.646a.5.5 0 1 0-.708.708l12 12a.5.5 0 0 0 .708-.708l-12-12z" />
    </svg>
  );
};

export const Home = () => {
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

  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
  };
  const Learn = () => {
    navigate("/learnMore");
  };

  return (
    <>
      <div className="sticky sm:relative z-[1] font-[Poppins]  h-fit">
        <header className="bg-white   dark:bg-slate-700 dark:border-slate-700 dark:shadow-cyan-500/30 shadow-slate-300 shadow-md">
          <nav className="flex justify-between items-center w-[92%] mx-auto h-[3rem]">
            <div className=" z-[2] text-[15px]  font-[Poppins] dark:text-gray-300  ">
              <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">PMusic</span>
                  <img
                    className="h-8 w-auto"
                    src="/favicon.ico"
                    alt="PMusic Logo"
                  />
                </a>
              </div>
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
                      className="hover:text-red-500 dark:hover:text-black dark:text-gray-300 transition ease-out delay-100 duration-500"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to={"/login"}
                    className="hover:text-red-500 dark:hover:text-black dark:text-gray-300 transition ease-out delay-100 duration-500 md:hidden"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6 z-[2]">
              <div className=" p-1  flex">
                <button
                  className="hover:text-red-500 dark:hover:text-black dark:text-gray-300 transition ease-out delay-100 duration-500 hidden lg:block md:block "
                  onClick={Login}
                >
                  Login
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
      <div className="relative isolate px-6 pt-14 lg:px-8 dark:bg-black h-screen">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#360117] to-[#00d9ff] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-6xl">
              Wellcome To PMusic
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              <span>
                PMusic is an excellent free music streaming platform that offers
                a vast collection of songs to enjoy at no cost. It is a go-to
                destination for music lovers seeking unlimited listening
                pleasure without any subscription fees.
              </span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={Login}
                className="rounded-md bg-[#35a99d] px-3.5 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-[#163835] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </button>
              <button
                onClick={Learn}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
