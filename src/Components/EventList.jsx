import React from "react";
import EventHorizontalCard from "./EventHorizontalCard";
import { useNavigate } from "react-router-dom";

const EventList = () => {
  const eventsData = [
    {
      eventImageHorizontal:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-karthik-tour-0-2024-4-12-t-10-26-10.jpg",
      eventImageVertical:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAzIEF1Zw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00394719-exvdthdglh-portrait.jpg",
      eventName: "Karthik - Live in Concert",
      eventAddress: "Hindusthan College",
      eventPrice: 749,
      eventDate: "2024-08-15",
      eventTime: "7:00 PM",
      eventCategory: "Entertainment",
      latitude: 11.0537,
      longitude: 76.9742,
    },
    {
      eventImageHorizontal:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-social-symphony-by-lea-90s-vs-2k-reloaded-0-2024-6-21-t-10-36-12.jpg",
      eventImageVertical:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyNCBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00402278-wgscafvfyy-portrait.jpg",
      eventName: "Social Symphony by LEA",
      eventAddress: "SITRA Auditorium",
      eventPrice: 349,
      eventDate: "2024-08-24",
      eventTime: "6:30 PM",
      eventCategory: "Entertainment",
      latitude: 11.0183,
      longitude: 77.0323,
    },
    {
      eventImageHorizontal:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vikkals-of-vikram-0-2024-7-12-t-4-30-38.jpg",
      eventImageVertical:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAyOCBEZWM%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00404482-ryaplyvfpq-portrait.jpg",
      eventName: "Vikkals of Vikram",
      eventAddress: "SITRA Auditorium",
      eventPrice: 250,
      eventDate: "2024-08-28",
      eventTime: "7:00 PM",
      eventCategory: "Entertainment",
      latitude: 11.0183,
      longitude: 77.0323,
    },
    {
      eventImageHorizontal:
        "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-alt-tab-life-of-ram-tamil-standup-0-2024-7-6-t-10-57-55.jpg",
      eventImageVertical:
        "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNyBBdWc%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00384655-pamxvpkmgr-portrait.jpg",
      eventName: "Life of Ram",
      eventAddress: "SITRA Auditorium",
      eventPrice: 490,
      eventDate: "2024-08-30",
      eventTime: "6:00 PM",
      eventCategory: "Entertainment",
      latitude: 11.0183,
      longitude: 77.0323,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="bg-[#2b2219] min-h-screen">
      <h1 className="text-[#f2ae01] text-xl text-center mb-4 pt-[80px]">
        Event List
      </h1>

      <h2 className="text-white text-4xl font-bold text-center mb-12">
        Discover the Hottest Events Coming Your Way
      </h2>

      <div className="flex flex-col gap-10">
        {eventsData.map((event, index) => (
          <EventHorizontalCard key={index} event={event} />
        ))}
      </div>

      <div className="flex justify-center mt-12 pb-[80px]">
        <button className="bg-[#f14b17] text-white font-semibold rounded-lg px-6 py-4 hover:bg-[#e03b1e] transition-colors duration-300" onClick={() => {
          navigate('/events')
        }}>
          View More
        </button>
      </div>
    </div>
  );
};

export default EventList;
