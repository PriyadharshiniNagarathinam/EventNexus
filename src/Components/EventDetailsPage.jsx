import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
  TextField,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SaveIcon from "@mui/icons-material/Save";

const participants = [
  {
    name: "John Doe",
    socialMedia: "https://instagram.com/johndoe",
    icon: <InstagramIcon />,
  },
  {
    name: "Jane Smith",
    socialMedia: "https://facebook.com/janesmith",
    icon: <FacebookIcon />,
  },
  {
    name: "Sam Wilson",
    socialMedia: "https://twitter.com/samwilson",
    icon: <TwitterIcon />,
  },
  {
    name: "Emily Johnson",
    socialMedia: "https://linkedin.com/in/emilyjohnson",
    icon: <LinkedInIcon />,
  },
];

const EventDetailsPage = ({ event }) => {
  const [editMode, setEditMode] = useState(false);
  const [eventDetails, setEventDetails] = useState(event);

  const handleSave = () => {
    // Implement save logic here
    setEditMode(false);
  };

  return (
    <div className="flex flex-col md:flex-row p-6 bg-[#151515] text-[#EEEEEE]">
      {/* Event Image */}
      <Card
        sx={{ maxWidth: 500, marginBottom: "20px", backgroundColor: "#151515" }}
      >
        <CardMedia
          component="img"
          height="300"
          image={eventDetails.imageHorizontal}
          alt="Event"
        />
      </Card>

      {/* Event Details */}
      <div className="flex-1">
        <Accordion
          defaultExpanded
          sx={{ backgroundColor: "#151515", color: "#EEEEEE" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#C73659" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Edit Event Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {editMode ? (
              <div>
                <TextField
                  label="Event Name"
                  fullWidth
                  value={eventDetails.eventName}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      eventName: e.target.value,
                    })
                  }
                  margin="normal"
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: "#EEEEEE",
                    color: "#151515",
                  }}
                  InputLabelProps={{ style: { color: "#151515" } }}
                />
                <TextField
                  label="Event Date"
                  type="date"
                  fullWidth
                  value={eventDetails.eventDate}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      eventDate: e.target.value,
                    })
                  }
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: "#EEEEEE",
                    color: "#151515",
                  }}
                />
                <TextField
                  label="Event Time"
                  type="time"
                  fullWidth
                  value={eventDetails.eventTime}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      eventTime: e.target.value,
                    })
                  }
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: "#EEEEEE",
                    color: "#151515",
                  }}
                />
                <TextField
                  label="Event Address"
                  fullWidth
                  value={eventDetails.eventAddress}
                  onChange={(e) =>
                    setEventDetails({
                      ...eventDetails,
                      eventAddress: e.target.value,
                    })
                  }
                  margin="normal"
                  sx={{
                    marginBottom: "16px",
                    backgroundColor: "#EEEEEE",
                    color: "#151515",
                  }}
                />
                <Button
                  onClick={handleSave}
                  startIcon={<SaveIcon />}
                  sx={{
                    backgroundColor: "#A91D3A",
                    color: "#EEEEEE",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  Save Changes
                </Button>
              </div>
            ) : (
              <div>
                <Typography variant="h6">
                  Event Name: {eventDetails.eventName}
                </Typography>
                <Typography variant="body1">
                  Date: {eventDetails.eventDate}
                </Typography>
                <Typography variant="body1">
                  Time: {eventDetails.eventTime}
                </Typography>
                <Typography variant="body1">
                  Address: {eventDetails.eventAddress}
                </Typography>
                <Button
                  onClick={() => setEditMode(true)}
                  startIcon={<EditIcon />}
                  sx={{
                    backgroundColor: "#A91D3A",
                    color: "#EEEEEE",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    marginTop: "16px",
                  }}
                >
                  Edit
                </Button>
              </div>
            )}
          </AccordionDetails>
        </Accordion>

        {/* Participants List */}
        <Accordion
          sx={{
            backgroundColor: "#151515",
            color: "#EEEEEE",
            marginTop: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#C73659" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Participants</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center mb-4">
                {participant.icon}
                <Typography
                  variant="body1"
                  component="a"
                  href={participant.socialMedia}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                  sx={{ color: "#EEEEEE" }}
                >
                  {participant.name}
                </Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default EventDetailsPage;
