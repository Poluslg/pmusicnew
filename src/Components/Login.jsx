import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);

  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("uid", user.uid);
        navigateTo("/home/afterlogin");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("Invalid email address and/or password");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address");
        } else if (error.code === "auth/wrong-password") {
          setError("Wrong password");
        } else if (error.code === "auth/internal-error") {
          setError("Server Error");
        } else if (error.code === "auth/missing-password") {
          setError("Please enter the password");
        } else {
          setError(error.code);
        }
      });
  };
  // const handleRememberMeChange = () => {
  //   setRememberMe(!rememberMe);
  // };

  const cancel = () => {
    navigateTo("/");
  };
  const Newac = () => {
    navigateTo("/newac");
  };
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className=" isolate  dark:bg-black h-screen">
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
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 left-60">
          <div className="w-full max-w-md space-y-8 md:relative left-[36%]">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="/favicon.ico"
                alt="PMusic"
              />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sign in to your account
              </h2>
            </div>
            <div className=" text-center text-red-500 text-[16px] font-serif">
              <h1>{error}</h1>
            </div>
            <form className="-space-y-px rounded-md shadow-sm" onSubmit={login}>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>

            {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                onClick={handleRememberMeChange}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
          </div> */}
            <div>
              <button
                type="submit"
                onClick={login}
                className="group relative flex w-full justify-center rounded-md border  bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
              <div className="flex items-center justify-between pt-4">
                <div className="text-sm">
                  <Link
                    to="/forgotpassword"
                    className=" relative flex pt-1 w-[10rem] font-medium  text-indigo-600 hover:text-indigo-500 dark:text-white"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <button
                  type="submit"
                  onClick={cancel}
                  className="group relative flex w-full place-self-auto md:pl-[15rem] justify-center font-medium text-red-600 hover:text-indigo-500"
                >
                  Cancel
                </button>

                {/* <button
                type="submit"
                onClick={newac}
                className="group relative flex w-full justify-center font-medium text-red-600 hover:text-indigo-500"
              >
                Create a new Account
              </button> */}
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <button
                  onClick={Newac}
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Start a your free trial
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
