import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestrauntCard from "./components/RestrauntCard";
import restraunts from './data/data.js'
import { useState } from "react";
import './style.css'

function filterList(searchValue) {
  const filteredData = restraunts.filter((res)=>{
    if(res.info.name.toLowerCase().includes(searchValue.toLowerCase())){
      return res;
    }
  })
  return filteredData;
}

const App = () => {

  const [restrauntList, setRestrauntList] = useState(restraunts);
  
  

  return (
    <>
      <Header filterList={filterList} setList={setRestrauntList}/>
      <div className="cards-container">
        {restrauntList.map((restraunt) => {
            return <RestrauntCard key={restraunt.info.id} name={restraunt.info.name} cuisines={restraunt.info.cuisines} ratings={restraunt.info.avgRating} imgId={restraunt.info.cloudinaryImageId} area={restraunt.info.areaName}/>
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
