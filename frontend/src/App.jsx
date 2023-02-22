import { Routes, Route, useLocation } from "react-router-dom";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";
import Home from "./pages/Home/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TeamPresentation from "./pages/Team/Team";
import LoginUser from "./pages/Login/LoginUser";
import Profil from "./pages/Profil/Profil";
import History from "./pages/Profil/History";
import Rideshare from "./pages/CarPool/Rideshare";
import RentACar from "./pages/Rent/RentUser";
import Management from "./pages/Management/Management";
import VehicleManagement from "./components/management/VehicleManagement";

function App() {
  const { pathname } = useLocation();
  const { currentUser } = useCurrentUserContext();
  return (
    <div className="App">
      {(pathname === "/" ||
        pathname === "/presentationTeam" ||
        pathname === "/profile" ||
        pathname === "/rideshare" ||
        pathname === "/rent" ||
        pathname === "/management" ||
        pathname === "/history" ||
        pathname === "/vehicleManagement") && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentationTeam" element={<TeamPresentation />} />
        <Route path="/login" element={<LoginUser />} />
        {currentUser.id && <Route path="/profile" element={<Profil />} />}
        <Route path="/history" element={<History />} />
        <Route path="/rideshare" element={<Rideshare />} />
        <Route path="/rent" element={<RentACar />} />
        <Route path="/profile" element={<Profil />} />
        {currentUser.id && currentUser.entrepriseId && (
          <Route path="/management" element={<Management />} />
        )}
        {currentUser.id && currentUser.entrepriseId && (
          <Route path="/vehicleManagement" element={<VehicleManagement />} />
        )}

        <Route path="*" element={<p>ERROR 404</p>} />
      </Routes>
      {(pathname === "/" ||
        pathname === "/presentationTeam " ||
        pathname === "/profile" ||
        pathname === "/rideshare" ||
        pathname === "/rent" ||
        pathname === "/management" ||
        pathname === "/history" ||
        pathname === "/vehicleManagement") && <Footer />}
    </div>
  );
}

export default App;
