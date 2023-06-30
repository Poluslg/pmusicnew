import {
  ArrowPathIcon,
  FingerPrintIcon,
  LockClosedIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const features = [
  {
    name: "A Safe Environment",
    description:
      "At PMusic, we prioritize your safety and security. We understand the importance of maintaining a trustworthy online environment, free from malware, viruses, and inappropriate content. Our platform utilizes robust security measures to ensure your browsing experience is worry-free and protected. You can enjoy your favorite tunes without any concerns about compromising your personal information or device security",
    icon: LockClosedIcon,
  },
  {
    name: "User-Friendly Interface",
    description:
      "We believe that accessing and enjoying music should be a seamless experience for everyone. PMusic features a user-friendly interface designed to provide you with an intuitive browsing and listening experience. You can easily search for your favorite songs, create personalized playlists, and discover new music that matches your taste. Prahlad Biswas has put extra effort into ensuring that PMusic is easy to navigate, even for those who may not be tech-savvy",
    icon: UserGroupIcon,
  },
  {
    name: "Constant Updates and Improvements",
    description:
      "Prahlad Biswas is committed to continuously improving PMusic based on user feedback and the evolving music landscape. Regular updates are made to enhance the platform's features, security, and performance. By choosing PMusic, you become part of a thriving community, and your suggestions and ideas are always welcomed and valued",
    icon: ArrowPathIcon,
  },
  {
    name: "Conclusion",
    description:
      "PMusic, created by student developer Prahlad Biswas, offers a safe and free music website for music enthusiasts around the world. With its vast music library, personalized recommendations, user-friendly interface, and commitment to supporting emerging artists, PMusic is the perfect destination for all your musical needs. Join us today and embark on a melodious journey filled with the joy of music",
    icon: FingerPrintIcon,
  },
];

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

export const LearnMore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMode, setActiveMode] = useState(false);

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

  useEffect(() => {
    if (
      localStorage.getItem("mode") &&
      localStorage.getItem("mode") === "dark"
    ) {
      toggleMode();
    }
  }, []);

  const navigate = useNavigate();
  const Login = () => {
    navigate("/login");
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
              className={`nav-links  z-[1] duration-500 md:static absolute bg-white dark:bg-slate-700 md:min-h-fit pt-[5rem] pb-[3rem]  md:py-0 left-0  ${
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
      <div className="relative isolate px-6 pt-14 lg:px-8 dark:bg-gray-800  ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#360117] to-[#00d9ff] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] "
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              PMusic
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Introduction
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
              Welcome to PMusic, a fantastic online music platform designed to
              provide you with a safe and enjoyable listening experience.
              Developed by Prahlad Biswas, a talented student passionate about
              music, PMusic offers an extensive library of songs from various
              genres, ensuring that there is something for everyone. Best of
              all, it is completely free to use.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-cyan-200">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-[#360117] to-[#00d9ff]">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
