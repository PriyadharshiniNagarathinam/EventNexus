import React from "react";
import SportsIcon from "../assets/sport.png";
import EntertainmentIcon from "../assets/entertainment.png";
import EducationIcon from "../assets/online-learning.png";
import BusinessIcon from "../assets/growth.png";
import FoodIcon from "../assets/restaurant.png";
import TechnologyIcon from "../assets/artificial-intelligence.png";
import ArtsIcon from "../assets/art.png";
import MusicIcon from "../assets/musical-notes.png";
import { useNavigate } from "react-router-dom";

const PopularCategories = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "sports", icon: SportsIcon },
    { name: "entertainment", icon: EntertainmentIcon },
    { name: "education", icon: EducationIcon },
    { name: "business", icon: BusinessIcon },
    { name: "food", icon: FoodIcon },
    { name: "technology", icon: TechnologyIcon },
    { name: "arts", icon: ArtsIcon },
    { name: "music", icon: MusicIcon }, 
  ];

  return (
    <div className="bg-[#131112] p-10 pt-[80px] pb-[150px]">
      <p className="text-center text-[#f2ae01] text-xl mb-3">
        Popular Categories
      </p>
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Explore Top Categories in Your Area
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-[#1c1c1c] rounded-lg p-6 flex flex-col items-center justify-center hover:bg-[#f2ae01] hover:text-[#131112] transition-colors duration-300 cursor-pointer"
            onClick={()=>navigate(`/category/${category.name}`)}
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-24 h-24 mb-4 transition-colors duration-300 group-hover:text-[#131112]"
            />
            <p className="text-white text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
