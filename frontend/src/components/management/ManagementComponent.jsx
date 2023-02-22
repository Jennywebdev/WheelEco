import { Link } from "react-router-dom";
import IconCar from "../../assets/icon1.svg";
import IconClaim from "../../assets/icon2.svg";
import IconMaintenance from "../../assets/icon3.svg";
import IconBill from "../../assets/icon4.svg";
import IconQuality from "../../assets/icon5.svg";
import "./ManagementComponent.css";

export default function ManagementComponent() {
  return (
    <div className="ManagementPageGlobal">
      <div className="ManagementPageItem">
        <Link to="/vehicleManagement" className="ItemBoxManagementLink">
          <img src={IconCar} alt="" className="iconManagement" />
          <p className="title-boxManagement"> Vehicle management </p>
        </Link>
        <div className="ItemBoxManagement">
          <img src={IconClaim} alt="" className="iconManagement" />
          <p className="title-boxManagement"> Invoice management </p>
        </div>
        <div className="ItemBoxManagement">
          <img src={IconMaintenance} alt="" className="iconManagement" />
          <p className="title-boxManagement"> Maintenance management </p>
        </div>
        <div className="ItemBoxManagement">
          <img src={IconBill} alt="" className="iconManagement" />
          <p className="title-boxManagement"> Disaster management </p>
        </div>
        <div className="ItemBoxManagement">
          <img src={IconQuality} alt="" className="iconManagement" />
          <p className="title-boxManagement"> Quality control </p>
        </div>
      </div>
    </div>
  );
}
