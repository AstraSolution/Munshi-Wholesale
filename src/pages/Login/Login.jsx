import React, { useState } from "react";
import EyeIcon from "../../shared/Icons/EyeIcon";
import EyeSlashIcon from "../../shared/Icons/EyeSlashIcon";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const handleSignUp = () => {};
  const handleGoogleLogin = () => {};
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSignUp}>
        <div class="relative float-label-input">
          <input
            type="email"
            name="email"
            placeholder=" "
            className="block bg-white w-full  focus:outline-none focus:shadow-outline border border-green-500 rounded-md py-3 px-4 appearance-none leading-normal"
          />
          <label class="absolute top-3 left-0 text-green-500 pointer-events-none transition duration-200 ease-in-outbg-white px-4">
            Email Address
          </label>
        </div>
        <div className="flex items-center relative">
          <div class="relative float-label-input w-full">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder=" "
              className="block bg-white w-full  focus:outline-none focus:shadow-outline border border-green-500 rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label class="absolute top-3 left-0 text-green-500 pointer-events-none transition duration-200 ease-in-outbg-white px-4">
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
        <input
          type="submit"
          value="Login"
          className="w-full secondaryBG hover:bg-[#4b997c] py-3 text-white rounded-md transition duration-200 ease-in-outbg-white"
        />

        <hr className="bg-gray-700 my-10 w-3/4 mx-auto" />

        <p className="text-center">
          New to GadgetHub?{" "}
          <Link
            to={"/register"}
            className="secondaryText hover:text-[#4b997c] hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
