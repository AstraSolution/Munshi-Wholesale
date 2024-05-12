import { NavLink } from "react-router-dom";

export default function CustomLink({ path, children }) {
  return (
    <span className="block bg-gray-300 px-3 py-1.5 rounded-md border-l-4 border-yellow-600 hover:bg-yellow-600 md:bg-transparent md:px-0 md:py-0 md:rounded-none md:border-none">
      <NavLink to={path} activeClassName="active" className="w-full">
        {children}
      </NavLink>
    </span>
  );
}
