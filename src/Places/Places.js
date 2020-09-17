import React, { useState } from "react";
import "./Places.css";
import fakeData from "../FakeData/Fakedata";
import PlaceCard from "../PlaceCard/PlaceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const Places = () => {
  const [location, setLocation] = useState(fakeData);
  const [newID, setNewID] = useState(0);

  const handleCardHover = (id) => {
    setNewID(id);
  };
  console.log(newID);
  const filteredInfo = location.filter((flInfo) => {
    return flInfo.id === newID;
  });
  return (
    <div className='container places'>
      <div className='row'>
        <div className='col-md-4'>
          {filteredInfo.map((info) => {
            return (
              <div className='place-info'>
                <h1>{info.name}</h1>
                <p>{info.desc}</p>
                <button className='btn btn-warning'>
                  Booking <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
              </div>
            );
          })}
        </div>
        <div className='col-md-8'>
          <div className='row'>
            {location.map((lc) => (
              <PlaceCard
                placeData={lc}
                handleCardHover={handleCardHover}
              ></PlaceCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Places;
