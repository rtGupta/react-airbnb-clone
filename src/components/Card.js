import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={`images/${props.img}`} alt="Katie Zaferes" />
            <div className="card-stats">
                <img className="card-star" src="images/star.png" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-price"><b>From ${props.price}</b> / person</p>
        </div>
    )
}