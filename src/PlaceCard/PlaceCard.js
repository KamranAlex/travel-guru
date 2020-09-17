import React from "react";
import { Link } from "react-router-dom";
import "./PlaceCard.css";

const PlaceCard = (props) => {
  const { id, name, photo } = props.placeData;

  return (
    <div className='col-md-4'>
      <Link to={`/booking/${id}`}>
        <div className='card' onMouseOver={() => props.handleCardHover(id)}>
          <img src={photo} alt='' />
          <div className='card-text'>
            <h2>{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlaceCard;
