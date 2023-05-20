import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
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
        }else if (error.code === "auth/invalid-email") {
          seterror("Please enter a valid email address");
        }else if (error.code === "auth/missing-password") {
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
    <>
      <div className="bg-[#25CCF7] h-screen  dark:bg-gradient-to-r from-black to-polu-500 pt-[1rem] sm:pt-[1px]">
        <div className="mt-2 sm:mt-10">
          <div className="flex  justify-center">
            <form method="POST">
              <div className=" overflow-hidden shadow  sm:rounded-md">
                <div className="bg-gray-200 pt-2 rounded px-4 pb-[6rem] sm:p-6">
                  <div className=" text-center">{error}</div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="user-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        User Name
                      </label>
                      <input
                        ref={inputUserName}
                        type="text"
                        name="user-name"
                        id="user-name"
                        autoComplete="username"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <input
                        ref={inputFirstName}
                        type="text"
                        name="firstname"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <input
                        ref={inputLastName}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Email
                    </label>
                    <input
                      ref={inputEmail}
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium leading-6 text-gray-900  "
                    >
                      Phone Number
                    </label>
                    <input
                      ref={inputNumber}
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel-national"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="block text-sm font-medium leading-6 text-gray-900 ">
                    <label
                      htmlFor="password"
                      className="block text-sm py-1 font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      ref={inputPassword}
                      type="password"
                      name="password"
                      id="password"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="block text-sm font-medium leading-6 text-gray-900 ">
                    <label
                      htmlFor="password"
                      className="block text-sm py-1 font-medium leading-6 text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      ref={inputPassword}
                      type="password"
                      name="password"
                      id="password"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <div className=" px-4 py-3 text-right sm:px-6">
                      <button type="submit" className=" nbtn" onClick={cancel}>
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
