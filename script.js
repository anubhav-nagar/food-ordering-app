import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestrauntCard from "./components/RestrauntCard";
import restraunts from './data/data.js'
import { useState } from "react";
import './style.css'
import CardsShimmer from "./components/CardsShimmer";

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

  // console.log(restrauntList);

  // async function getRestaurants(){
  //   const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true');
  //   const json = await data.json();
  //   console.log(json.result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setRestrauntList(json.result?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // }

  // // API not working
  // useEffect(()=>{
  //   getRestaurants();
  // }, [])

  return (
    <>
      <Header filterList={filterList} setList={setRestrauntList}/>
      <div className="cards-container">
        {
        // restrauntList?.length===0 ? <CardsShimmer /> :
        restrauntList?.map((restraunt) => {
            return <RestrauntCard key={restraunt?.info?.id} name={restraunt?.info?.name} cuisines={restraunt?.info?.cuisines} ratings={restraunt?.info?.avgRating} imgId={restraunt?.info?.cloudinaryImageId} area={restraunt?.info?.areaName}/>
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
