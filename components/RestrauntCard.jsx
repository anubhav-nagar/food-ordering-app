import React from 'react'
// import './restrauntCard.css'

export default function RestrauntCard({...props}) {
  function callRestaurant(){
    const BASE_URL = "https://www.swiggy.com/restaurants/";
    const api = BASE_URL + props.name.replace(/\s+/g, '-') + "-" + props.locality.replace(/\s+/g, '-') + "-" + props.areaName.replace(/\s+/g, '-') + "-" + props.resId.replace(/\s+/g, '-')
    console.log(api);
    // const rest = fetch(api)
    // .then(res=>res.json())
    // .then((resDetail)=>{console.log(resDetail)})
  } 
  return (
    <div className="card-container h-72 w-72 rounded-[40px] shadow-xl mx-5 my-3 bg-white hover:scale-105 transition-all" onClick={callRestaurant}>
      {/* {console.log(props)} */}
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.imgId}`} alt="restraunt image" className='h-44 w-72 rounded-[40px]'/>
      <div className="ml-6 mt-1">
        <h4 className="text-lg text-slate-800 font-medium">
          {props.name.slice(0, 22) + (props.name.length > 22 ? "..." : "")}
        </h4>
        <p className="text-sm text-slate-600 my-1">⭐ {props?.ratings}</p>
        <p className="text-sm text-slate-600 ml-1">{props.cuisines.slice(0,2).join(", ")}</p>
        <p className="text-sm text-slate-600 ml-1">{props.area.slice(0, 30) + (props.area.length > 30 ? "..." : "")}</p>
      </div>
    </div>
    
  )
}
