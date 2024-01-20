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
        key = {item.id}
        {...item}
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
