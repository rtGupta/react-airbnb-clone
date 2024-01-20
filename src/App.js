import React from "react";
import Card from "./components/Card";
import ExperiencesHeader from "./components/ExperiencesHeader";
import Navbar from "./components/Navbar";
import { data } from "./data";

import "./styles.css";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
        status={item.status}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <ExperiencesHeader />
      <section className="cards-carousel">{cards}</section>
    </div>
  );
}
