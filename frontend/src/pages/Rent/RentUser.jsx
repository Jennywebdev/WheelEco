import "./RentUser.css";
import axios from "axios";
import { useState, useEffect } from "react";
import FilterObject from "filter-object-array";
import FilterCard from "../../components/filtercard/FilterCard";

export default function RentACar() {
  const [cars, setCars] = useState([
    {
      models: "208",
      marque: "Peugeot",
      fuelType: "diesel",
      price: 50,
      carPicture: "https://cdn-icons-png.flaticon.com/512/52/52120.png",
    },
    {
      models: "911",
      marque: "Porsche",
      fuelType: "ethanol",
      price: 60,
      carPicture: "https://cdn-icons-png.flaticon.com/512/52/52120.png",
    },
    {
      models: "F40",
      marque: "Ferarri",
      fuelType: "E10",
      price: 150,
      carPicture: "https://cdn-icons-png.flaticon.com/512/52/52120.png",
    },
    {
      models: "X",
      marque: "Tesla",
      fuelType: "electrique",
      price: 90,
      carPicture: "https://cdn-icons-png.flaticon.com/512/52/52120.png",
    },
  ]);

  const [newInfos, setNewInfos] = useState({});
  const [newCar, setNewCar] = useState([]);

  const onChanges = (e) => {
    const newData = newInfos;
    newData[e.target.id] = e.target.value;
    if (e.target.value.length < 1) {
      delete newData[e.target.id];
    }
    setNewInfos(newData);
    const sameDataType = async () => {
      const value = await FilterObject({ array: cars, objFilter: newData });
      if (value.length > 0) {
        setNewCar(value);
      } else {
        setNewCar(cars);
      }
    };
    sameDataType();
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/cars/allentreprise`)
      .then(({ data }) => {
        setCars(data);
        setNewCar(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="rentPage">
      <div className="rentHeader">
        <input
          type="text"
          name="marque"
          placeholder="ex: Peugeot"
          id="marque"
          className="searchBar"
          onChange={onChanges}
        />
        <input
          type="text"
          name="models"
          placeholder="ex: 208"
          id="models"
          className="searchBar"
          onChange={onChanges}
        />
        <input
          type="text"
          name="fuelType"
          placeholder="ex: 
          diesel fuel"
          id="fuelType"
          className="searchBar"
          onChange={onChanges}
        />
        <input
          type="text"
          name="price"
          placeholder="ex: 50$"
          id="price"
          className="searchBar"
          onChange={onChanges}
        />
      </div>
      <div className="lineDivise">{null}</div>
      <div className="rentBody">
        {newCar.length > 0 ? (
          newCar.map((i) => <FilterCard {...i} />)
        ) : (
          <h1>NO CARS FOUND</h1>
        )}
      </div>
    </div>
  );
}
