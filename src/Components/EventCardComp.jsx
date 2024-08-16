// EventCard.js
import React from "react";

const EventCardComp = ({ event }) => {
  return (
    <div className="bg-[#e9965f] text-white rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
      <img
        src={event.eventImageVertical}
        alt={event.eventName}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{event.eventName}</h3>
        <p className="text-lg mb-1">{event.eventAddress}</p>
        <p className="text-lg mb-1">
          {event.eventDate} at {event.eventTime}
        </p>
        <div className="flex items-center">
          <span className="text-lg font-semibold mr-2">
            ₹{event.eventPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCardComp;
