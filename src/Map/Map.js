import React from "react";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import HeaderDark from "../Header/HeaderDark";
import "./Map.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import fakeData from "../FakeData/Fakedata";

const Map = () => {
  const { id } = useParams();

  const locationInfo = fakeData.filter((locInfo) => {
    return locInfo.id === parseInt(id);
  });

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap defaultZoom={7} defaultCenter={{ lat: 23.8103, lng: 90.4125 }}>
        {locationInfo.map((area) => {
          return (
            <Marker position={{ lat: area.coords.lat, lng: area.coords.lng }}>
              <InfoWindow>
                <p>{area.name}</p>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    ))
  );
  return (
    <div>
      <HeaderDark></HeaderDark>
      {locationInfo.map((place) => {
        return (
          <h1 className='text-center map-intro'>Welcome to, {place.name}</h1>
        );
      })}
      <div className='container googleMap'>
        <MapWithAMarker
          googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyAeAFd3TWhgm-Bz8APBIdWVsGmAZz7N9k4&v=3.exp&libraries=geometry,drawing,places'
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `500px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </div>

      {/* Hotels part- Static  */}

      <div className='container hotels '>
        {locationInfo.map((hotel) => {
          return (
            <h2 className='text-center hotel-intro'>
              <span>Hotel's in {hotel.name}</span>
            </h2>
          );
        })}
        <div className='row d-flex'>
          <div className='col-md-4'>
            <div className='card hotel-card'>
              <img
                className='card-img-top hotel-img'
                src={
                  "https://lh3.googleusercontent.com/p/AF1QipM5CjhybPEf6n1mZk6i1IIC4G4TJLV7xXHZzXBn=w296-h202-n-k-rw-no-v1"
                }
                alt=''
              />
              <div className='card-body hotel-body'>
                <p className='hotel-title'>Muscat Holiday Resort</p>
                <p className='hotel-info'>
                  Muscat Holiday Resort is offering accommodations in Cox's
                  Bazar. This 3-star hotel offers an ATM, ticket service and
                  free WiFi.
                </p>
                <p className='hotel-price'>
                  BDT 1,557 <small>per night</small>
                </p>
              </div>
              <div className='card-footer text-center'>
                <button className='btn btn-info'>
                  Book a Room&#160;&#160;
                  <FontAwesomeIcon icon={faBed} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card hotel-card'>
              <img
                className='card-img-top hotel-img'
                src={
                  "https://lh3.googleusercontent.com/p/AF1QipPDZhI_5mq22s3qPlDm9oETXPStxWwp-Zz71fxi=w296-h202-n-k-rw-no-v1"
                }
                alt=''
              />
              <div className='card-body hotel-body'>
                <p className='hotel-title'>GREEN LEAF GUEST HOUSE</p>
                <p className='hotel-info'>
                  Green Leaf Guest House has a terrace. Both a bicycle rental
                  service and a car rental service are available at the
                  accommodation, while cycling can be enjoyed.
                </p>
                <p className='hotel-price'>
                  BDT 1,277 <small>per night</small>
                </p>
              </div>
              <div className='card-footer hotel-footer text-center'>
                <button className='btn btn-info'>
                  Book a Room&#160;&#160;
                  <FontAwesomeIcon icon={faBed} />
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card hotel-card'>
              <img
                className='card-img-top hotel-img'
                src={
                  "https://lh3.googleusercontent.com/p/AF1QipMvbLU84b_27Lz01b-KqKDg-1IbHLPNxmkgRow8=w296-h202-n-k-rw-no-v1"
                }
                alt=''
              />
              <div className='card-body hotel-body'>
                <p className='hotel-title'>Sundarban Safari Resort</p>
                <p className='hotel-info'>
                  Sundarban Safari Resort has air-conditioned accommodations in
                  Gosāba. Among the facilities of this property are a
                  restaurant, a 24-hour front desk support.
                </p>
                <p className='hotel-price'>
                  BDT 1,399 <small>per night</small>
                </p>
              </div>
              <div className='card-footer hotel-footer text-center'>
                <button className='btn btn-info'>
                  Book a Room&#160;&#160;
                  <FontAwesomeIcon icon={faBed} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
