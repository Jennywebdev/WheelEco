import "./Home.css";
import homepage1 from "../../assets/homepage1.svg";
import homepage2 from "../../assets/homepage2.svg";
import homepage3 from "../../assets/homepage3.svg";

export default function Home() {
  return (
    <div className="homepage">
      <div className="itemhomepage1">
        <img
          src={homepage1}
          alt="Man looking at a car on the internet with good reviews"
        />
        <p className="homeparaph1">
          Rent the car that suits your needs with our large fleet of vehicles,
          most of which are electric, and our many partners (city cars, sedans,
          vans). Our fleet of cars is recent, maintained, monitored and in
          perfect condition for your travels. The rental period can vary from a
          few hours to several months. A service of provision of its own vehicle
          will be possible via our platform. An attractive tariff is set up so
          that everyone can use this sharing service.
        </p>
      </div>
      <div className="itemhomepage2">
        <img src={homepage2} alt="people goin on carpool together" />
        <p className="homeparaph2">
          Thanks to our service of connecting users you can share your journeys,
          reduce your carbon footprint and lower your costs. Ecofriendly rides
          guaranteed! Via a rating system, guaranteeing you the quality of the
          service and the partner.
        </p>
      </div>
      <div className="itemhomepage3">
        <img src={homepage3} alt="Garage that repairs a car" />
        <p className="homeparaph3">
          With a complete management service that tracks vehicles, such as
          maintenance, claims, contracts, insurance and carbon impact, you can
          optimise consumption, costs and anticipate any constraints your
          organisation may face, you will be able to optimise consumption, costs
          and thus anticipate all the constraints your organisation may face
          (vehicle maintenance, infringement management and everything else you
          may need in your organisation).
        </p>
      </div>
    </div>
  );
}
