import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
// import CityList from "../components/CityList";
// import Abouttemp from "../components/Abouttemp";
import Cards from "../components/Cards";
// <div className="flex ">
//   <div className="max-w- 2xl flex justify-center items-center">
//     <h1 className="text-xl font-semibold">
//       The #1 independent real estate team in the state of Illinois
//     </h1>
//   </div>
// </div>;
import CityList from "../components/CityList";

export default function About() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/urban-view-with-white-skyscrapersthe-city-background-concept_258219-285.jpg')",
    height: "90vh",
    marginTop: "0px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // opacity: "0.5",
  };

  const cardData = {
    title: "Beautiful Beach Resort",
    description:
      "A stunning resort located in the heart of Goa with breathtaking views and luxurious amenities.",
    imageUrl: "clientsrcpageshouse.jpg", // replace with your actual image URL
  };
  return (
    <div style={myStyle}>
      <div className="py-20 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-slate-800 text-center">
          About MERN Estate
        </h1>
        <p className="mb-4 text-slate-700 text-lg font-semibold leading-loose">
          MERN Estate is a leading real estate agency that specializes in
          helping clients buy, sell, and rent properties in the most desirable
          neighborhoods. Our team of experienced agents is dedicated to
          providing exceptional service and making the buying and selling
          process as smooth as possible.
        </p>
        <p className="mb-4 text-slate-700 text-lg font-semibold leading-loose">
          Our mission is to help our clients achieve their real estate goals by
          providing expert advice, personalized service, and a deep
          understanding of the local market. Whether you are looking to buy,
          sell, or rent a property, we are here to help you every step of the
          way.
        </p>
        <p className=" text-slate-700 text-lg mb-80 font-semibold leading-loose">
          Our team of agents has a wealth of experience and knowledge in the
          real estate industry, and we are committed to providing the highest
          level of service to our clients. We believe that buying or selling a
          property should be an exciting and rewarding experience, and we are
          dedicated to making that a reality for each and every one of our
          clients.
        </p>

        <CityList />
      </div>
    </div>
  );
}
