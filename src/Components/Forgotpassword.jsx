import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../Firebase";

export const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    const auth = getAuth(app);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.alert("Password reset email sent!");
        cancel();
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setError("Email id not registered");
        } else if (error.code === "auth/invalid-email") {
          setError("Please enter a valid email address");
        } else if (error.code === "auth/missing-email") {
          setError("Please enter email address");
        } else {
          setError(error.code);
        }
      });
  };

  const cancel = () => {
    navigateTo("/login");
  };
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[#25CCF7] h-screen dark:bg-gradient-to-r from-black to-polu-500 place-items-center pt-[10rem]">
      <div className="mt-10  w-30 mx-7 sm:mx-auto sm:w-full sm:max-w-sm ">
        <div className=" text-center text-xl  pb-8">
          <h1>{error}</h1>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className=" pt-8">
          <button
            type="button"
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Forgot Password
          </button>
        </div>
        <button
          type="button"
          onClick={cancel}
          className="group relative flex w-full justify-center font-medium text-red-600 hover:text-indigo-500 pt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
