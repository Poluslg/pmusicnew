import { useNavigate } from 'react-router-dom';
import Header from './Header'
export const AfterLogin = () => {
  const navigate = useNavigate();

  const knowMore = () => {
    const link = "/";
    navigate(link);
  }
  return (
    <div>
      <Header />
      <div
        id="content"
        className="sm:blur-0 z-[0] overflow-hidden scroll-smooth hover:scroll-auto md:scroll-auto"
      >

        <div
          id="About"
          className="bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500"
        >
          <div className="pt-10 "></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                About My Self
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Hi there! My name is Prahlad Biswas, and I'm a student pursuing a Bachelor's degree in Information Technology. I have a strong passion for technology and am always eager to learn about the latest advancements in the field. Apart from my studies, I enjoy exploring different programming languages and Web  development tools. In my free time, I like to experiment with coding projects . My goal is to gain the skills and knowledge necessary to become a successful Web Developer , and I'm excited to see where my education and passion for technology will take me in the future
              </p>
            </div>

            <button
              onClick={knowMore}
              className=" absolute cursor-pointer  max-w-screen-sm px-8  py-2 my-4   rounded-md bg-red-500 border-solid border-1 border-red-500 text-white dark:text-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 sm:px-4 lg:px-5 ">
              Know More
            </button>
          </div>
        </div>
      </div>

    </div>

  )
}
