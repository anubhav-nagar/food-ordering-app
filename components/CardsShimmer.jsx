import React from "react";
import "./cardsShimmer.css";

export default function CardsShimmer() {
  const shimmerCard = Array.from({length: 20}).map((e, index) => {
    return <div className="card-shimmer" key={index}></div>
  })
  return (
    <>
      <div className="shimmer-alignment">
        {shimmerCard}
      </div>
    </>
  );
}
