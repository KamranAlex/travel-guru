import React from "react";
import { Link, useParams } from "react-router-dom";
import fakeData from "../FakeData/Fakedata";
import Header from "../Header/Header";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();

  const passedInfo = fakeData.filter((flInfo) => {
    return flInfo.id === parseInt(id);
  });

  return (
    <div className='container-fluid home'>
      <Header></Header>
      <div className='container places'>
        <div className='col-md-6'>
          {passedInfo.map((psInfo) => {
            return (
              <div className='info'>
                <h1>{psInfo.name}</h1>
                <p>{psInfo.desc}</p>
              </div>
            );
          })}
        </div>
        <div className='col-md-6'>
          <div className='booking-form'>
            <form action=''>
              <div className='form-group'>
                <label for='exampleInputEmail1'>Origin</label>
                <input
                  className='form-control'
                  type='text'
                  name='origin'
                  id=''
                />
              </div>
              <div className='form-group'>
                <label for='exampleInputEmail1'>Destination</label>
                <input
                  className='form-control'
                  type='text'
                  name='Destination'
                  id=''
                />
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>From</label>
                    <input
                      className='form-control'
                      type='date'
                      name='Destination'
                      id=''
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>To</label>
                    <input
                      className='form-control'
                      type='date'
                      name='Destination'
                      id=''
                    />
                  </div>
                </div>
              </div>
              <Link to='/booking'>
                <button type='submit' className='bookingBtn'>
                  Start Booking
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
