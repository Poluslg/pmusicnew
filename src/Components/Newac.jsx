import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../Firebase";
import { useForm } from "react-hook-form";

export const Newac = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (data) => {
    const email = data.email;
    const password = data.password;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        writeUserData(user.uid, data);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          seterror("Account already exists!");
        } else if (error.code === "auth/invalid-email") {
          seterror("Please enter a valid email address");
        } else if (error.code === "auth/missing-password") {
          seterror("Please enter the password");
        } else {
          seterror(error.code);
        }
      });
  };

  function writeUserData(userId, data) {
    const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: data.userName,
      email: data.email,
      phonenumber: data.number,
    });
    alert("Successfully registered");
    cancel();
  }

  const cancel = () => {
    navigate("/Login");
  };

  return (
    <div className="bg-[#25CCF7] h-full dark:bg-gradient-to-r from-black to-polu-500 pt-[10px]">
      <div className="md:w-[30rem] mx-auto p-4 border border-gray-600 shadow-md shadow-black mt-[0.5rem] rounded w-fit ">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-gray-300">
          Create a New Account
        </h2>
        <div className="text-center text-red-600">{error}</div>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="mb-6">
            <input
              {...register("userName", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              autoComplete="username"
            />
            <div>
              {errors.userName && (
                <p className="text-red-600 text-x pt-2">
                  {errors.userName && <p>! Username is required.</p>}
                </p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              // value={email}
              autoComplete="email"
            />
            <div>
              <p className="text-red-600 text-x pt-2">
                {errors.email && <p>! Email is required.</p>}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register("number", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              type="text"
              name="number"
              id="number"
              placeholder="contact number"
              autoComplete="tel-national"
            />
            <div>
              <p className="text-red-600 text-x  pt-2">
                {errors.number && <p> ! Number is required.</p>}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register("password", { required: true })}
              className="w-full border border-gray-300 rounded p-2"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <div>
              <p className="text-red-600 text-x  pt-2">
                {errors.password && <p> ! Password is required.</p>}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4">
            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
            <div className="px-4 py-3 text-right sm:px-6 dark:text-gray-300">
              <button type="button" className="nbtn" onClick={cancel}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
