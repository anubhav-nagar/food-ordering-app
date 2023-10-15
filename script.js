import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestrauntCard from "./components/RestrauntCard";
import restraunts from './data/data.js'
import './style.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="cards-container">
        {restraunts.map((restraunt) => {
            return <RestrauntCard key={restraunt.info.id} name={restraunt.info.name} cuisines={restraunt.info.cuisines} ratings={restraunt.info.avgRating} imgId={restraunt.info.cloudinaryImageId} area={restraunt.info.areaName}/>
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
