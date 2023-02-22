import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const { currentUser } = useCurrentUserContext();
  return (
    <nav className="navBar">
      <ul>
        <li>
          <NavLink className="navLink" to="/rent">
            Rent a car
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/rideshare">
            Ride Share
          </NavLink>
        </li>
        {currentUser.id && currentUser.entrepriseId && (
          <li>
            <NavLink className="navLink" to="/management">
              Management
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
