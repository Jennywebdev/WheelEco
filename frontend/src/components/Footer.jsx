import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/presentationTeam" className="linkpresentation">
        <p className="presteam">
          If you want to know more about the team that developed this site,
          click here.{" "}
        </p>
      </Link>
    </div>
  );
};

export default Footer;
