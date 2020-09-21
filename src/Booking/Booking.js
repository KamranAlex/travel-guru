import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import fakeData from "../FakeData/Fakedata";
import Header from "../Header/Header";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const history = useHistory();

  const passedInfo = fakeData.filter((flInfo) => {
    return flInfo.id === parseInt(id);
  });

  const handleBookingForm = (id) => {
    history.push(`/map/${id}`);
  };

  return (
    <div className='container-fluid home'>
      <Header></Header>
      {passedInfo.map((psInfo) => {
        return (
          <div className='container places'>
            <div className='col-md-6'>
              <div className='info'>
                <h1>{psInfo.name}</h1>
                <p>{psInfo.desc}</p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='booking-form'>
                <form
                  action=''
                  onSubmit={() => {
                    handleBookingForm(psInfo.id);
                  }}
                >
                  <div className='form-group'>
                    <label for='Origin'>Origin</label>
                    <input
                      className='form-control'
                      type='text'
                      name='origin'
                      id=''
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label for='Destination'>Destination</label>
                    <input
                      className='form-control'
                      type='text'
                      name='Destination'
                      id=''
                      value={psInfo.name}
                      required
                    />
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label for='fromDate'>From</label>
                        <input
                          className='form-control'
                          type='date'
                          name='fromDate'
                          id=''
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label for='toDate'>To</label>
                        <input
                          className='form-control'
                          type='date'
                          name='ToDate'
                          id=''
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type='submit' className='booking-button'>
                    Book Now&#160;&#160;&#160;
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Booking;
