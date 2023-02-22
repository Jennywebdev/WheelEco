import "./FilterCard.css";

const FilterCard = ({ models, price, marque, fuelType, carPicture }) => {
  return (
    <div className="cardBody">
      <div className="cardHeader">
        <img className="carImg" alt="rent car" src={carPicture} />
      </div>

      <div className="cardContainer">
        <div className="infosCars">
          <h2>Marque :</h2>
          <p>{marque}</p>
        </div>
        <div className="infosCars">
          <h2>Models :</h2>
          <p>{models}</p>
        </div>
        <div className="infosCars">
          <h2>Fuel Type :</h2>
          <p>{fuelType}</p>
        </div>
        <div className="infosCars">
          <h2>Price/Month:</h2>
          <p>{price}</p>
        </div>
      </div>

      <div className="cardFooter">
        <button type="button" className="buttoncarsRent">
          RENT
        </button>
      </div>
    </div>
  );
};

export default FilterCard;
