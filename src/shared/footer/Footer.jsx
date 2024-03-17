import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

const Footer = () => {
  const footerLinks = (
    <>
      <li>
        <NavLink to={"/about"} className="hover:border-b border-white">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className="hover:border-b border-white">
          Contact
        </NavLink>
      </li>
    </>
  );

  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-white py-3 text-center">
          <h1 className="text-3xl pb-3">
            <Logo />
          </h1>

          <ul className="flex justify-center items-center gap-3">
            {footerLinks}
          </ul>
        </div>

        <hr />

        <p className="text-xs text-gray-400 text-center py-3">
          &copy; copyright {currentYear} Munshi Wholesale. All copyrigth
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
