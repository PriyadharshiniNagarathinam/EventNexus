import React from "react";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const EventHorizontalCard = ({ event }) => {

  return (
    <div className="bg-[#131112] rounded-lg shadow-lg hover:bg-[#1c1c1c] transition-colors duration-300 w-[1100px] mx-auto group">
      <div className="flex items-stretch">
        {/* Image Section */}
        <div className="flex-shrink-0 w-1/3 overflow-hidden rounded-lg">
          <img
            src={event.eventImageHorizontal}
            alt="Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-4">
          {/* Event Title */}
          <h2 className="text-white text-2xl font-bold mb-2">
            {event.eventName}
          </h2>

          {/* Tulip-like Components */}
          <div className="flex space-x-4 mb-2">
            <div className="flex items-center space-x-1 bg-[#4f4f4f] text-white rounded-full px-3 py-1 group-hover:text-[#f2ae01] transition-colors duration-300">
              <CalendarIcon className="w-5 h-5" />
              <span>{event.eventDate}</span>
            </div>
            <div className="flex items-center space-x-1 bg-[#4f4f4f] text-white rounded-full px-3 py-1 group-hover:text-[#f2ae01] transition-colors duration-300">
              <ClockIcon className="w-5 h-5" />
              <span>{event.eventTime}</span>
            </div>
            <div className="flex items-center space-x-1 bg-[#4f4f4f] text-white rounded-full px-3 py-1 group-hover:text-[#f2ae01] transition-colors duration-300">
              <MapPinIcon className="w-5 h-5" />
              <span>{event.eventAddress}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-300 mb-2">
            Quisque aliquet mauris id sapien tincidunt, in dictum lorem cursus.
          </p>

          {/* Price and Book Now Button */}
          <div className="flex items-center justify-between">
            <span className="text-white text-lg font-semibold">
              ₹{event.eventPrice}
            </span>
            <button className="bg-[#4f4f4f] text-white font-semibold rounded-lg px-4 py-2 group-hover:bg-[#f14b17] transition-colors duration-300">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHorizontalCard;
