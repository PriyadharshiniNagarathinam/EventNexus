import React from "react";
import { Card, Grid, CircularProgress, Box } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";

function EventsGrid({filteredEvents}) {
  return (
    <div>
      <Grid container spacing={3} sx={{ mt: 4, ml: 3 }}>
        {filteredEvents.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minWidth: 250,
                maxWidth: 300,
                backgroundColor: "#3d2b1f",
              }}
            >
              {" "}
              {/* Set card background color */}
              <Link
                to={`/event/${event.id}` || "#"}
                style={{ textDecoration: "none" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 480,
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                    image={event.eventImageVertical}
                    alt={event.eventName}
                  />
                  <CardContent>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {event.eventName}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {event.eventAddress}
                    </p>
                    <div className="flex items-center">
                      <CurrencyRupeeIcon
                        fontSize="small"
                        sx={{ color: "#f2ae01" }}
                      />
                      <span className="ml-1 text-white">
                        {event.eventPrice}
                      </span>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default EventsGrid;
