import React, { useState } from "react";
import "./Places.css";
import fakeData from "../FakeData/Fakedata";
import PlaceCard from "../PlaceCard/PlaceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Places = () => {
  const [location, setLocation] = useState(fakeData);
  const [newID, setNewID] = useState(0);

  const handleCardHover = (id) => {
    setNewID(id);
  };
  const filteredInfo = location.filter((flInfo) => {
    return flInfo.id === newID;
  });
  return (
    <div className='container places'>
      <div className='row'>
        {newID ? (
          <div className='col-md-4'>
            {filteredInfo.map((info) => {
              return (
                <div className='place-info'>
                  <h1>{info.name}</h1>
                  <p>{info.desc}</p>
                  <Link to={`/booking/${info.id}`}>
                    <button className='btn btn-warning'>
                      Booking <FontAwesomeIcon icon={faArrowCircleRight} />
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='col-md-4'>
            <div className='place-info'>
              <h1>{location[0].name}</h1>
              <p>{location[0].desc}</p>
              <Link to={`/booking/${location[0].id}`}>
                <button className='btn btn-warning'>
                  Booking <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
              </Link>
            </div>
          </div>
        )}
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
