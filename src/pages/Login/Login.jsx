
import  { useContext, useState } from "react";
import EyeIcon from "../../shared/Icons/EyeIcon";
import EyeSlashIcon from "../../shared/Icons/EyeSlashIcon";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../../Public/assets/icons/google.png";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import { FuncContext } from "../../providers/FunctionProvider";
import useAuth from "../../hooks/auth/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);
  const axiosPublic = useAxiosPublic()
  const { googleLogin, signInUser, passwordResetEmail } =  useAuth();
  const { handleAddToCarts } = useContext(FuncContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      const res = await signInUser(email, password);
      const loggedUser = res.user;
      
      await handleAddToCarts(loggedUser?.displayName, loggedUser?.email)
 
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      
      form.reset();
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Invalid Email or Password",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email)
    passwordResetEmail(email)
      .then(() => {
        console.log("please check your email");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then( async(res) => {
        const loggedUser = res.user;
        

        const userInfo = {
          name: loggedUser?.displayName,
          email: loggedUser?.email
        }
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
          Login
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

        <form onSubmit={handleLogin}>
          {/* email field  */}
          <div className="relative float-label-input pb-5">
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email Address
            </label>
          </div>

          {/* password field  */}
          <div className="flex items-center relative pb-1">
            <div className="relative float-label-input w-full">
              <input
                type={showPassword ? "password" : "text"}
                name="password"
                placeholder=" "
                required
                className="shadow-sm block bg-white w-full  focus:outline-none focus:shadow-outline border border-[#ffc10a] rounded-md py-3 px-4 appearance-none leading-normal"
              />
              <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
                Password
              </label>
            </div>

            {/* show and hide password toggle  */}
            <p
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer absolute right-4"
            >
              <small>{showPassword ? <EyeIcon /> : <EyeSlashIcon />}</small>
            </p>
          </div>

          {/* forget password url  */}
          <Link onClick={handleForgetPassword}>
            <small className="block text-right underline pb-4 text-[#967c2f] hover:text-[#e9af03]">
              Forget Password?
            </small>
          </Link>

          {/* form submit button  */}
          <input
            type="submit"
            value="Login"
            className="shadow-sm w-full bg-[#ffc10a] hover:bg-[#e9af03] py-3 text-white font-semibold rounded-md transition duration-200 ease-in-outbg-white"
          />
        </form>

        <p className="text-center mt-5">
          New to Munshi-Wholesale?{" "}
          <Link
            to={"/register"}
            className="text-[#967c2f] hover:text-[#ffc10a] hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
