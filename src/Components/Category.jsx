import React, { useState, useEffect } from "react";
import EventsGrid from "./EventsGrid";
import { useParams } from "react-router-dom";

function Category() {
  const { category } = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      console.log(category);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/events/category/${category}`
        );
        console.log(response.data);
        setEvent(response.data);
      } catch (error) {
        alert("Error fetching event data!");
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

    return (
    <div>
        {/* <EventsGrid flilteredEvents={event} /> */}
        <h1>Hii there</h1>
    </div>
  );
}

export default Category;
