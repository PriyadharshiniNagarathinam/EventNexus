import axios from "axios";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import BookNow from "./Components/BookNow";
import BookTicketNow from "./Components/BookTicketNow";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Payment from "./Components/Payment";
import SigninForm from "./Components/SignIn";
import SignupForm from "./Components/SignUpForm";
import Events from "./Components/Events";
import UpcomingEvents from "./Components/DetailedEvent";
import VenueList from "./Components/Venue";
import CategoryCards from "./Components/WCategoryCards";
import Home from "./Home";
import "./index.css";
import ProfilePage from "./Components/ProfilePage";
import YourEventsPage from "./Components/YourEventsPage";
import EventsGrid from "./Components/EventsGrid";
import Category from "./Components/Category";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleEventChange = (newEvent) => {
    console.log("Event updated successfully!");
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === newEvent.id ? { ...event, ...newEvent } : event
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/events")
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the events!", error);
        setLoading(false);
      });
  }, []);

  // Function to get a random sample of 6 events
  const getRandomEvents = (events, count = 6) => {
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <>
      <div>
        <Router>
          <Navbar handleEventChange={handleEventChange} />
          <Routes>
            <Route
              path="/"
              element={
                <Home events={getRandomEvents(events)} loading={loading} />
              }
            />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/signin" element={<SigninForm />} />
            <Route path="/weddings" element={<CategoryCards />} />
            <Route
              path="/events"
              element={<Events events={events} loading={loading} />}
            />
            <Route path="/weddings/venues" element={<VenueList />} />
            <Route path="/event/:id" element={<UpcomingEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resort" element={<BookNow />} />
            <Route path="/book-now" element={<BookTicketNow />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/yourevents" element={<YourEventsPage />} />
            <Route path="/category/:category" element={<Category  />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
