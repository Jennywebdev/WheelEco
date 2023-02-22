import Arrow from "../../assets/arrow.png";
import FilterIcon from "../../assets/filterIcon.png";
import Louis from "../../assets/LouisDriver.jpeg";
import Antoine from "../../assets/AntoineDriver.jpg";
import Xavier from "../../assets/XavierDriver.jpeg";

import "./Rideshare.css";

export default function Rideshare() {
  return (
    <div className="ridesharepage">
      <div className="headerpagerideshare">
        <input
          type="text"
          name="from"
          placeholder="ex: La loupe"
          id=""
          className="inputFrom"
        />
        <img src={Arrow} alt="" className="arrow" />
        <input
          type="text"
          name="to"
          id=""
          placeholder="ex: Siège AWS"
          className="inputTo"
        />
        <img src={FilterIcon} alt="" className="filterlogo" />
      </div>
      <div className="boxrideshare">
        <div className="itemrideshare">
          <img src={Louis} alt="" className="profilepictureuser" />
          <div className="infoFrom">
            <h1 className="fromPlace"> Paris</h1>
            <h1 className="fromHour"> 9:00</h1>
          </div>
          <img src={Arrow} alt="" className="arrowto" />
          <div className="infoTo">
            <h1 className="toPlace"> La loupe</h1>
            <h1 className="toHour"> 10:30</h1>
          </div>
        </div>
      </div>
      <div className="boxrideshare">
        <div className="itemrideshare">
          <img src={Antoine} alt="" className="profilepictureuser" />
          <div className="infoFrom">
            <h1 className="fromPlace"> Paris</h1>
            <h1 className="fromHour"> 10:00</h1>
          </div>
          <img src={Arrow} alt="" className="arrowto" />
          <div className="infoTo">
            <h1 className="toPlace"> La loupe</h1>
            <h1 className="toHour"> 11:30</h1>
          </div>
        </div>
      </div>
      <div className="boxrideshare">
        <div className="itemrideshare">
          <img src={Xavier} alt="" className="profilepictureuser" />
          <div className="infoFrom">
            <h1 className="fromPlace"> Paris</h1>
            <h1 className="fromHour"> 14:00</h1>
          </div>
          <img src={Arrow} alt="" className="arrowto" />
          <div className="infoTo">
            <h1 className="toPlace"> La loupe</h1>
            <h1 className="toHour"> 15:30</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
