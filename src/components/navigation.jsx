import { Link, useLocation } from 'react-router-dom';
import { BsFiles } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import "./navigation.css";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link to="/documents" className={`nav-button ${location.pathname === '/documents' ? 'active' : ''}`}>
        <BsFiles />
      </Link>
      <Link to="/" className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}>
        <GoHomeFill />
      </Link>
      <Link to="/profile" className={`nav-button ${location.pathname === '/profile' ? 'active' : ''}`}>
        <FaUser />
      </Link>
    </nav>
  );
};

export default Navigation;