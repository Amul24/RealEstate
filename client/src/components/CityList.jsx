import React from "react";
import { Link } from "react-router-dom";

const CityCard = ({ city }) => (
  <div className="city-card bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">
    <h3 className="text-lg font-medium">{city}</h3>
  </div>
);

const CityList = () => (
  <>
    <div className="flex justify-center items-center  my-5 ">
      <h2 className="text-2xl font-semibold mb-4">
        Find Your Property in Your Preferred City
      </h2>
    </div>
    <div className="city-list grid grid-cols-4 gap-4 mt-8">
      {cities.map((city) => (
        <Link to="/Search">
          <CityCard key={city} city={city} />
        </Link>
      ))}
    </div>
  </>
);

const cities = [
  "New Delhi",
  "Mumbai",
  "Gurgaon",
  "Noida",
  "Bangalore",
  "Ahmedabad",
  "Kolkata",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Thane",
  "Lucknow",
  "Zirakpur Jaipur",
  "Mohali",
  "Bhiwadi",
  "Nagpur",
  "Faridabad",
  "Surat",
  "Goa",
  "Indore",
  "Vadodara",
];

export default CityList;
