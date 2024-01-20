import React from "react";
import Card from "./components/Card";
import ExperiencesHeader from "./components/ExperiencesHeader";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <ExperiencesHeader />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        numberOfReviews={6}
        location="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
