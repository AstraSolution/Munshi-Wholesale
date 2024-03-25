import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="./">
        <button className="font-bold">
          M<span className="font-extralight">Wholesale</span>
        </button>
      </Link>
    </div>
  );
};

export default Logo;
