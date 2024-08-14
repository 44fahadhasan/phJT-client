import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-44">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
