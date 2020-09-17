import React from "react";
import Booking from "../Booking/Booking";
import Header from "../Header/Header";
import Places from "../Places/Places";
import "./Home.css";

const Home = () => {
  return (
    <div className='home container-fluid'>
      <Header></Header>
      {/* <Places></Places> */}
      <Booking></Booking>
    </div>
  );
};

export default Home;
