import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {};

  // Variants for Framer Motion animations
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="m-8 p-8 border rounded-md shadow-md w-[400px] max-w-[400px]"
      >
        <h2 className="text-center text-3xl font-semibold pb-8">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* full name field  */}
          <div className="relative float-label-input pb-5">
            <input
              type="text"
              name="fullName"
              placeholder=" "
              {...register("fullName", { required: "Full Name is required" })}
              className="shadow-sm block w-full bg-transparent  focus:outline-none focus:shadow-outline border border-[#ffc20a4d] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Full Name
            </label>

            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* email field */}
          <div className="relative float-label-input pb-5">
            <input
              type="email"
              name="email"
              placeholder=" "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm block w-full bg-transparent  focus:outline-none focus:shadow-outline border border-[#ffc20a4d] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email
            </label>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password field  */}
          <div className="relative float-label-input pb-5">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder=" "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="shadow-sm block w-full bg-transparent  focus:outline-none focus:shadow-outline border border-[#ffc20a4d] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Password
            </label>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}

            <motion.p
              whileHover={{ scale: 1.1 }} // Framer Motion animation on hover
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4 top-3"
            >
              <small>
                {showPassword ? (
                  <FaRegEye className="text-2xl" />
                ) : (
                  <FaRegEyeSlash className="text-2xl" />
                )}
              </small>
            </motion.p>
          </div>

          {/* error message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* register button  */}
          <motion.button
            whileHover={{ scale: 1.05 }} // Framer Motion animation on hover
            type="submit"
            className="bg-[#FFBA00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </motion.button>

          {/* redirect login page  */}
          <p className="text-gray-400 text-center mt-3">
            <small>
              Already have an account?{" "}
              <Link
                className="underline font-semibold text-[#ffc20aa2] hover:text-[#ffc10a]"
                to={"/login"}
              >
                Login
              </Link>
            </small>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
