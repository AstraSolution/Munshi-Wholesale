import React, { useState } from "react";
import EyeIcon from "../../shared/Icons/EyeIcon";
import EyeSlashIcon from "../../shared/Icons/EyeSlashIcon";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/icons/google.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const handleSignUp = () => {};
  const handleGoogleLogin = () => {};
  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <div className="max-w-[400px] w-[400px] border p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#ffc10a]">
          Login
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="mb-5 border rounded-md w-full p-3 text-lg font-semibold flex items-center justify-center gap-3"
        >
          <img src={googleIcon} alt="" />
          Login with Google
        </button>

        <div className="flex items-center justify-center gap-5 pb-6">
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
          <p>Or</p>
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
        </div>

        <form onSubmit={handleSignUp}>
          <div class="relative float-label-input pb-5">
            <input
              type="email"
              name="email"
              placeholder=" "
              className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label class="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email Address
            </label>
          </div>
          <div className="flex items-center relative pb-1">
            <div class="relative float-label-input w-full">
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder=" "
                className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
              />
              <label class="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
                Password
              </label>
            </div>
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4"
            >
              <small>{showPassword ? <EyeIcon /> : <EyeSlashIcon />}</small>
            </p>
          </div>
          <small className="block text-right underline pb-4">
            Forget Password?
          </small>
          <input
            type="submit"
            value="Login"
            className="w-full bg-[#ffc10a] hover:bg-[#e9af03] py-3 text-white font-semibold rounded-md transition duration-200 ease-in-outbg-white"
          />
        </form>

        {/* <hr className="bg-gray-700 my-10 w-3/4 mx-auto" /> */}

        <p className="text-center mt-5">
          New to Munshi-Wholesale?{" "}
          <Link
            to={"/register"}
            className="secondaryText hover:text-[#ffc10a] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
