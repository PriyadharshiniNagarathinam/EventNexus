import React from "react";
import PopularSearches from "./Components/PopularSearches";
import { NavCategoryCards } from "./Components/WCategoryCards";
import Footer from "./Components/Footer";
import EventCarousel from "./Components/EventCarousel";
import MainComponent from "./Components/MainComp";
import EventList from "./Components/EventList";
import PopularCategories from "./Components/PopularCategories";

const Home = ({ events, loading }) => {
  return (
    <div>
      {/* <EventCarousel events={events} loading={loading} /> */}
      <MainComponent/>
      {/* <PopularSearches /> */}
      <EventList/>
      {/* <NavCategoryCards /> */}
      <PopularCategories/>
      <Footer />
    </div>
  );
};

export default Home;
