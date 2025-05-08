import { FaRegFile, FaHome, FaUser } from "react-icons/fa";
import { BsFiles } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import "./navigation.css";

export const Navigation = () => {
  return (
    <nav className="navigation">
      <button className="nav-button">
        <BsFiles />
      </button>
      <button className="nav-button">
        <GoHomeFill />
      </button>
      <button className="nav-button">
        <FaUser />
      </button>
    </nav>
  );
};

export default Navigation;