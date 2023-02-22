import { NavLink } from "react-router-dom";
import CarsPeugeot from "../../assets/peugeot-e-208.png";
import "./History.css";

const Profil = () => {
  return (
    <section>
      <div className="historyPage">
        <div className="title-name">
          <ul className="navbarProfile">
            <li className="navbarItemProfile">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "navliink")}
              >
                <span className="title-picture">Profile Setting</span>
              </NavLink>
            </li>
            <li className="navbarItemProfile">
              <NavLink
                to="/history"
                className={({ isActive }) => (isActive ? "active" : "navliink")}
              >
                <span className="title-picture-1">History</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <h1 className="DateRent"> Loué du 21/12/2022 au 02/01/2022</h1>
        <div className="historyview">
          <img src={CarsPeugeot} alt="" className="imgcarhistory" />
          <div className="infohistory">
            <h2 className="itemscardhistory"> PEUGEOT E-208 </h2>
            <h2 className="itemscardhistory"> Year of release : 2019</h2>{" "}
            <h2 className="itemscardhistory"> Fuel Type : Electric</h2>
          </div>
          <h1 className="Pricehistory"> 159$/mois</h1>
        </div>
      </div>
    </section>
  );
};

export default Profil;
