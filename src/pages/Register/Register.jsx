import  { useContext, useState } from "react";
import EyeIcon from "../../shared/Icons/EyeIcon";
import EyeSlashIcon from "../../shared/Icons/EyeSlashIcon";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../../Public/assets/icons/google.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { FuncContext } from "../../providers/FunctionProvider";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const { googleLogin, createUser, updateUserProfile, emailVerification } =   useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { handleAddToCarts } = useContext(FuncContext)

  // const handleRegister = (e) => {


  const axiosPublic = useAxiosPublic();

  const signUp = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    const userInfo = { name, email, password };

    try {
      createUser(email, password).then(async (res) => {
        const updateName = await updateUserProfile(name);
        console.log("updateName",updateName);
        if (res.user) {
          
          await handleAddToCarts(name, email)
          try {
            setLoading(true)
            const res = await axiosPublic.post("/users", userInfo);
            setLoading(false)
            console.log("api response: ",res.data);
           setTimeout(() => {
            toast.success(' Singup  Successfully!');
           }, 1000);
           
            navigate(location?.state ? location.state : "/");
          } catch (error) {
            console.error("Error posting user data:", error);
            toast.error(' please Try Again');
          }
        }

        reset()
      });
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error(' please Try Again');
    }
  };




  const handleGoogleLogin = () => {
    googleLogin()
      .then( async(res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
        const userInfo = { 
          name: loggedUser?.displayName,
          email: loggedUser?.email
        };
      
        await axiosPublic.post("/users", userInfo)
        await handleAddToCarts(loggedUser?.displayName, loggedUser?.email)
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto px-5 md:px-0 flex justify-center items-center min-h-screen">
      <div className="max-w-[400px] w-[400px] border p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#ffc10a]">
          Register
        </h2>

        <button
          onClick={handleGoogleLogin}
          className="mb-5 border rounded-md w-full p-3 text-lg font-semibold flex items-center justify-center gap-3"
        >
          <img src={googleIcon} alt="" />
          Sign in with Google
        </button>

        <div className="flex items-center justify-center gap-5 pb-6">
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
          <p>Or</p>
          <hr className="bg-[#343A40] max-w-[20%] w-[20%]" />
        </div>

        <form onSubmit={handleSubmit(signUp)}>
          <div className="relative float-label-input pb-5">
            <input
              type="text"
              {...register("name")}
              placeholder=" "
              required
              className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Full Name
            </label>
          </div>
          <div className="relative float-label-input pb-5">
            <input
              type="email"
              {...register("email")}
              placeholder=" "
              required
              className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email Address
            </label>
          </div>
          <div className="flex items-center relative pb-5">
            <div className="relative float-label-input w-full">
              <input
                type={showPassword ? "password" : "text"}
                {...register("password")}
                placeholder=" "
                required
                className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
              />
              <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
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
            value="Sign up"
            className="shadow-sm btn w-full bg-[#ffc10a] hover:bg-[#e9af03] py-3 text-white font-semibold rounded-md transition duration-200 ease-in-outbg-white"
          />
     
        </form>

        {loading && <p>Loading...</p>}

        <p className="text-center mt-5">
          Already have an Account?{" "}
          <Link
            to={"/login"}
            className="text-[#967c2f] hover:text-[#ffc10a] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
}
