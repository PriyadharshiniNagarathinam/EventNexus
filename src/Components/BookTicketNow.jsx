import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function BookTicketNow() {
  const [ticketCount, setTicketCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = location.state || {};

  const handleAddTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  const handleRemoveTicket = () => {
    if (ticketCount > 1) {
      setTicketCount(ticketCount - 1);
    }
  };

  const totalAmount = ticketCount * (event?.eventPrice || 5);

  const handleProceed = () => {
    navigate("/payment", { state: { ticketCount, totalAmount, event } });
  };

  if (!event) {
    return <p>No event data available</p>;
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
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          bgcolor: "#FFFFFF",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#151515", // Text color
              textAlign: "center",
            }}
          >
            Ticket Details
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 3,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "12px",
              backgroundColor: "#FAFAFA", // Background color for details box
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#555", // Event name color
                textAlign: "center",
              }}
            >
              {event.eventName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "12px",
                backgroundColor: "#FFFFFF", // Background color for ticket count box
                boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <IconButton
                onClick={handleRemoveTicket}
                sx={{
                  bgcolor: "#FAFAFA",
                  "&:hover": { bgcolor: "#EEEEEE" },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6" sx={{ mx: 2, fontWeight: "bold" }}>
                {ticketCount} Ticket(s)
              </Typography>
              <IconButton
                onClick={handleAddTicket}
                sx={{
                  bgcolor: "#FAFAFA",
                  "&:hover": { bgcolor: "#EEEEEE" },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                fontWeight: "bold",
                color: "#151515", // Total amount color
                textAlign: "center",
              }}
            >
              Total Amount: <CurrencyRupeeIcon /> {totalAmount}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#f2ae01", // Button background color
                color: "#FFFFFF", // Button text color
                width: "100%",
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#f2ae01", // Button hover color
                },
                "&:focus": {
                  ringColor: "#A91D3A", // Button focus ring color
                },
              }}
              onClick={handleProceed}
            >
              Proceed
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
