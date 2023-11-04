import React from 'react'
import logo from '../images/logo-2.png'
// import './body.css'
import RestrauntCard from "./RestrauntCard";
import SearchBar from './SearchBar';
import restraunts from '../data/data';
import { useState } from 'react';
import restaurants from '../data/data';

export default function Body() {

  const [restrauntList, setRestrauntList] = useState(restraunts);

  return (
    <>
        <div className="search">
        <SearchBar setList={setRestrauntList} />
        </div>
        <div className="flex flex-wrap pt-12 pb-12 bg-slate-100 justify-center">
        {
        // restrauntList?.length===0 ? <CardsShimmer /> :
        restrauntList?.map((restaurant) => {
            return <RestrauntCard key={restaurant?.info?.id} name={restaurant?.info?.name} cuisines={restaurant?.info?.cuisines} ratings={restaurant?.info?.avgRating} imgId={restaurant?.info?.cloudinaryImageId} area={restaurant?.info?.areaName} areaName={restaurant?.info?.areaName} locality={restaurant?.info?.locality} resId={restaurant?.info?.id}/>
        })}
      </div>
    </>
  )
}
