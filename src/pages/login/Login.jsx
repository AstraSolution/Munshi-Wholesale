import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import FACEBOOK_ICON from "../../assets/icons/FacebookIcon.svg";
import GOOGLE_ICON from "../../assets/icons/GoogleIcon.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {};

  // variants for framer motion
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://i.ibb.co/M56D6xg/intro-section-pattern.png')]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="bg-white m-5 p-8 space-y-5 border rounded-md shadow-md w-[400px] max-w-[400px]"
      >
        <h2 className="text-center text-3xl font-semibold pb-3 ">Login</h2>

        {/* social login buttons  */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileHover={{ scale: 1.06 }}
            className="flex justify-center items-center gap-2 shadow-sm border py-3 w-full rounded-lg"
          >
            <img src={GOOGLE_ICON} className="w-5" alt="" />
            <span>Google</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.06 }}
            className="flex justify-center items-center gap-2 shadow-sm border py-3 w-full rounded-lg"
          >
            <img src={FACEBOOK_ICON} className="w-5" alt="" />
            <span>Facebook</span>
          </motion.button>
        </div>

        {/* devider  */}
        <div className="flex items-center justify-center gap-5">
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
          <p>Or</p>
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
        </div>

        {/* register form  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email field */}
          <div className="relative float-label-input pb-4">
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
              className="shadow-sm block w-full bg-transparent  focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#000] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email
            </label>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password field  */}
          <div className="relative float-label-input pb-4">
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
              className="shadow-sm block w-full bg-transparent  focus:outline-none focus:shadow-outline border border-[#ddd] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#000] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Password
            </label>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}

            <motion.p
              whileHover={{ scale: 1.1 }}
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

          <small className="flex justify-end -mt-3 mb-4">
            <Link className="underline">Forget Password?</Link>
          </small>

          {/* error message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          {/* register button  */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="bg-[#FFBA00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </motion.button>

          {/* redirect login page  */}
          <p className="text-gray-400 text-center mt-3">
            <small>
              New to Munshi-Wholesale?{" "}
              <Link
                className="underline font-semibold text-[#ffc20aa2] hover:text-[#ffc10a]"
                to={"/register"}
              >
                Register
              </Link>
            </small>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
