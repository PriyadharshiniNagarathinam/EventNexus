// YourEventsPage.js
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import EventCardComp from "./EventCardComp"; 

const YourEventsPage = () => {
  const events = [
    {
      eventImageVertical:
        "https://img.freepik.com/free-photo/ai-nuclear-energy-future-innovation-disruptive-technology_53876-129784.jpg?ga=GA1.1.944051474.1710046769&semt=ais_hybrid",
      eventName: "Tech Wizards",
      eventAddress: "Prozone Mall, Coimbatore",
      eventPrice: 299,
      eventDate: "2024-08-10",
      eventTime: "6:00 PM",
      eventCategory: "Entertainment",
      latitude: 11.0168,
      longitude: 76.9558,
    },
    {
      eventImageVertical:
        "https://img.freepik.com/premium-photo/crowd-people-are-cheering-front-colorful-background_984698-3633.jpg?ga=GA1.1.944051474.1710046769&semt=ais_hybrid",
      eventName: "Music Festival Extravaganza",
      eventAddress: "Cultural Arena, Bangalore",
      eventPrice: 499,
      eventDate: "2024-08-15",
      eventTime: "5:00 PM",
      eventCategory: "Music",
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      eventImageVertical:
        "https://img.freepik.com/free-photo/hands-holding-cotton-candy_23-2147918772.jpg?ga=GA1.1.944051474.1710046769&semt=ais_hybrid",
      eventName: "Food Festival Bonanza",
      eventAddress: "City Center Plaza, Chennai",
      eventPrice: 399,
      eventDate: "2024-08-20",
      eventTime: "4:00 PM",
      eventCategory: "Food",
      latitude: 13.0827,
      longitude: 80.2707,
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#2b2219",
        minHeight: "100vh",
        color: "#EEEEEE",
        p: "100px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#f2ae01",
          textAlign: "center",
          mb: 4,
          fontSize: "2.5rem",
        }}
      >
        Current Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {events.map((event) => (
          <Grid item key={event.eventName}>
            <EventCardComp event={event} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default YourEventsPage;
