import React from 'react'
import './restrauntCard.css'

export default function RestrauntCard({...props}) {
  return (
    <div className="card-container">
      {console.log(props)}
      <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.imgId}`} alt="restraunt image" className='res-image'/>
      <div className="description">
        <h4 className="res-name">
          {props.name.slice(0, 30) + (props.name.length > 30 ? "..." : "")}
        </h4>
        <p className="res-cuisines">{props.cuisines.slice(0,2).join(", ")}</p>
        <p className="res-address">{props.area.slice(0, 30) + (props.area.length > 30 ? "..." : "")}</p>
      </div>
    </div>
  )
}
