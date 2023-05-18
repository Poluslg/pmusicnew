import React from "react";




export const ErrorPage = () => {
  return (
    
      <div className="bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500 place-items-center">
        <div className=" relative  flex pt-16 flex-col items-center ">
        <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className=" text-5xl font-semibold text-indigo-600 dark:text-white">
              404
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-white">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
             
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};