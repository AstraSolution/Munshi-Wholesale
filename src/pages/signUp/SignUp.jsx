import { HomeIcon } from "@heroicons/react/24/outline";
import Logo from "../../shared/logo/Logo";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div>
      <NavLink to="/">
        <HomeIcon className="size-7 m-5" />
      </NavLink>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl text-center">
          <Logo />
        </h1>
        <p className="text-center text-xl my-3">Please Sign Up</p>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full h-10 border border-black rounded-lg px-3 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
