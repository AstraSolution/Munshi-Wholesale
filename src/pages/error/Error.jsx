import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-40">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-sm font-semibold">Opps!!! it&apos;s an error.</p>
        <NavLink to={"./"}>
          <button className="bg-black py-2 px-3 text-white rounded-lg mt-3">
            Go to Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
