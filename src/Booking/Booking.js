import React from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='info'>
            <h1>CoxBazar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quo ipsa earum numquam harum obcaecati, odio eveniet vitae
              explicabo asperiores voluptas iure dolore illum molestias debitis,
              deleniti, aut in est.
            </p>
          </div>
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
