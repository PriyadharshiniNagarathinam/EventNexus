import React, { useState, useEffect } from "react";
import { Card, Grid, CircularProgress, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import FilteringComponent from "./FilteringComponent";
import EventsGrid from "./EventsGrid";

function Events({ events, loading }) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const filtered = events.filter((event) => {
      const isCategoryMatch = category
        ? event.eventCategory === category
        : true;
      const isPriceMatch =
        (!minPrice || event.eventPrice >= minPrice) &&
        (!maxPrice || event.eventPrice <= maxPrice);

      return isCategoryMatch && isPriceMatch;
    });
    filtered.reverse();
    setFilteredEvents(filtered);
  }, [category, minPrice, maxPrice, events]);

  const handleFilterChange = (filters) => {
    setCategory(filters.category);
    setMinPrice(filters.minPrice);
    setMaxPrice(filters.maxPrice);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          p: 4,
          marginTop: "90px",
          position: "relative",
          backgroundColor: "#2b2219", // Set background color
        }}
      >
        <CircularProgress
          sx={{ color: "#f14b17", size: 60, position: "absolute" }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        pt: 5,
        ml: 0,
        backgroundColor: "#2b2219",
        minHeight: "100vh",
      }}
    >
      <FilteringComponent onFilterChange={handleFilterChange} />
      <Box
        sx={{
          flexGrow: 1,
          pl: 4,
          ml: { xs: 0, md: "320px" },
          pr: 2,
          backgroundColor: "#2b2219", // Set background color
          color: "#ffffff", // Ensure text is visible on dark background
        }}
      >
        <h3 className="text-2xl font-bold font-poppins text-white mt-20 ml-7">
          Upcoming Events
        </h3>
        <EventsGrid filteredEvents={filteredEvents} />
      </Box>
    </Box>
  );
}

export default Events;
