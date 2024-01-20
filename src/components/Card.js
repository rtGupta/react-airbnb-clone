import React from "react";

export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (props.status === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {!!badgeText && (
        <div className="card-badge">{badgeText.toUpperCase()}</div>
      )}
      <img
        className="card-image"
        src={`images/${props.coverImg}`}
        alt="Katie Zaferes"
      />
      <div className="card-stats">
        <img className="card-star" src="images/star.png" alt="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <h2 className="card-title">{props.title}</h2>
      <p className="card-price">
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}
