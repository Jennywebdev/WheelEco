import { Link } from "react-router-dom";
import "./Header.css";
import LogoWheelEco from "../assets/LogoHeader.svg";
import LogoProfile from "../assets/profileLogo.png";

import NavBar from "./NavBar";

const Header = () => {
  return (
    <section>
      <div className="header">
        <Link to="/">
          <img src={LogoWheelEco} alt="logo" className="logoHeader" />
        </Link>
        <Link to="/profile">
          <img
            src={LogoProfile}
            alt="profilelogo"
            className="logoprofileheader"
          />
        </Link>
      </div>
      <div className="navBar">
        <NavBar />
      </div>
    </section>
  );
};

export default Header;
