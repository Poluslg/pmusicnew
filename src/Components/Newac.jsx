import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";

export const Newac = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const inputFirstName = useRef(null);
  const inputLastName = useRef(null);
  const inputEmail = useRef(null);
  const inputNumber = useRef(null);
  const inputPassword = useRef(null);
  const inputUserName = useRef(null);
  const [error, seterror] = useState("");

  const register = (e) => {
    e.preventDefault();
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        writeUserData(user.uid);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          seterror("Account already exists !");
        } else if (error.code === "auth/invalid-email") {
          seterror("Please enter a valid email address");
        } else if (error.code === "auth/missing-password") {
          seterror("Please enter the password");
        } else {
          seterror(error.code);
        }
        console.log(error);
      });
  };

  function writeUserData(userId) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      usename: inputUserName.current.value,
      firstName: inputFirstName.current.value,
      lastName: inputLastName.current.value,
      email: inputEmail.current.value,
      phonenumber: inputNumber.current.value,
    });
    alert("successfully registered");
    cancel();
  }

  const cancel = () => {
    navigate("/Login");
  };
  return (
    <div className="  mb-12 bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500  pt-[1rem] ">
      <div className=" md:w-[30rem] mx-auto p-4 border border-gray-300  mt-10 rounded w-fit">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-gray-300 ">
          Create a New Account
        </h2>
        <div className=" text-center">{error}</div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Username</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputUserName}
            type="text"
            name="user-name"
            id="user-name"
            autoComplete="username"
          />
        </div>
        <div className="mb-4 dark:text-gray-300 ">
          <label className="block mb-2">First Name</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputFirstName}
            type="text"
            name="firstname"
            id="first-name"
            autoComplete="given-name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Last Name</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputLastName}
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Email:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputEmail}
            type="text"
            name="email-address"
            id="email-address"
            autoComplete="email"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Phone Number</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputNumber}
            type="text"
            name="phone-number"
            id="phone-number"
            autoComplete="tel-national"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Password:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputPassword}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 dark:text-gray-300 ">Confirm Password:</label>
          <input
            className="w-full border border-gray-300 rounded p-2"
            ref={inputPassword}
            type="password"
            name="password"
            id="password"
          />
        </div>

        <div className="flex items-center justify-between px-4 ">
          <div className=" px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              onClick={(e) => register(e)}
              className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Save
            </button>
          </div>
          <div className=" px-4 py-3 text-right sm:px-6 dark:text-gray-300 ">
            <button type="submit" className=" nbtn" onClick={cancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
