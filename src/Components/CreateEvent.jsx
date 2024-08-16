import React, { useState } from "react";
import Select from "react-select";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const categories = [
  { value: "Entertainment", label: "Entertainment" },
  { value: "Education", label: "Education" },
  { value: "Business", label: "Business" },
  { value: "Technology", label: "Technology" },
  { value: "Sports", label: "Sports" },
  { value: "Food", label: "Food" },
  { value: "Health", label: "Health" },
];

const CreateEvent = ({ open, onClose, handleEventChange }) => {
  const [eventName, setEventName] = useState("");
  const [eventCategory, setEventCategory] = useState(null);
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState([51.505, -0.09]);
  const [eventAddress, setEventAddress] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventImageVertical, setEventImageVertical] = useState("");
  const [eventImageHorizontal, setEventImageHorizontal] = useState("");

  // Event handler to set the location marker on map click
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        setEventLocation([e.latlng.lat, e.latlng.lng]);
      },
    });
    return eventLocation ? (
      <Marker position={eventLocation} icon={customIcon} />
    ) : null;
  };

  const handleCreateEvent = () => {
    const eventDetails = {
      eventName,
      eventCategory: eventCategory.value,
      eventDate,
      eventTime,
      eventLocation: {
        latitude: eventLocation[0],
        longitude: eventLocation[1],
      },
      eventAddress,
      eventPrice,
      eventImageVertical,
      eventImageHorizontal,
    };

    axios
      .post("http://localhost:8080/api/events", eventDetails)
      .then((response) => {
        alert("Event created successfully!");
        handleEventChange(response.data);
        onClose();
      })
      .catch((error) => {
        alert("There was an error creating the event!");
        console.error("There was an error creating the event!", error);
      });
  };

  return open ? (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white text-[#151515] rounded-lg w-full max-w-4xl mx-4 sm:mx-0 h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#f2ae01]">Create Event</h2>
          <button
            onClick={onClose}
            className="text-[#f2ae01] hover:text-[#e89b00] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="space-y-4">
          <label className="block text-[#f2ae01] mb-2">Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Event Name"
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">Category</label>
          <Select
            options={categories}
            value={eventCategory}
            onChange={(selectedOption) => setEventCategory(selectedOption)}
            placeholder="Select Category"
            styles={{
              container: (provided) => ({
                ...provided,
                marginBottom: "16px",
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 9999,
              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: "#f7f7f7",
                borderRadius: "4px",
                color: "#151515",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#151515",
              }),
              placeholder: (provided) => ({
                ...provided,
                color: "#151515",
              }),
            }}
          />
          <label className="block text-[#f2ae01] mb-2">Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">Event Time</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">Event Address</label>
          <input
            type="text"
            value={eventAddress}
            onChange={(e) => setEventAddress(e.target.value)}
            placeholder="Event Address"
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">Event Price</label>
          <input
            type="text"
            value={eventPrice}
            onChange={(e) => setEventPrice(e.target.value)}
            placeholder="Event Price"
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">
            Vertical Image Link
          </label>
          <input
            type="text"
            value={eventImageVertical}
            onChange={(e) => setEventImageVertical(e.target.value)}
            placeholder="Vertical Image Link"
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <label className="block text-[#f2ae01] mb-2">
            Horizontal Image Link
          </label>
          <input
            type="text"
            value={eventImageHorizontal}
            onChange={(e) => setEventImageHorizontal(e.target.value)}
            placeholder="Horizontal Image Link"
            className="w-full p-2 rounded-md bg-[#f7f7f7] text-[#151515]"
          />
          <MapContainer
            center={eventLocation}
            zoom={13}
            style={{ height: "300px", marginTop: "16px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
          </MapContainer>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleCreateEvent}
            className="bg-[#f2ae01] text-[#151515] font-bold py-2 px-4 rounded-lg hover:bg-[#e89b00] focus:outline-none"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CreateEvent;
