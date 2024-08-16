import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Box, Button, Typography } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import axios from "axios";

export default function UpcomingEvents() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/events/${id}`
        );
        setEvent(response.data);
      } catch (error) {
        alert("Error fetching event data!");
        console.error("Error fetching event data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBookNow = () => {
    navigate("/book-now", { state: { event } });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!event) {
    return <p>Event not found</p>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        p: 4,
        backgroundColor: "#131112",
      }}
    >
      <Card sx={{ width: "100%", maxWidth: 1200, backgroundColor: "#1f1f1f" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              height: "auto",
              maxHeight: 700,
              maxWidth: "100%",
              objectFit: "cover",
              borderRadius: "20px 20px 0 0",
            }}
            image={event.eventImageHorizontal}
            alt={event.eventName}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#f2ae01", fontWeight: "bold" }}
              >
                {event.eventName}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#f14b17",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#d83a0c",
                  },
                }}
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography variant="body1" sx={{ color: "#f2ae01", mr: 2 }}>
                {event.eventDate}
              </Typography>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{ color: "#f2ae01", mr: 1 }}
              />
              <Typography variant="body1" sx={{ color: "#f2ae01", mr: 2 }}>
                {event.eventAddress}
              </Typography>
              <CurrencyRupeeIcon
                fontSize="small"
                sx={{ color: "#f2ae01", mr: 1 }}
              />
              <Typography variant="body1" sx={{ color: "#f2ae01" }}>
                {event.eventPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
