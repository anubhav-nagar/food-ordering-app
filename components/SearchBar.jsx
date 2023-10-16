import React from 'react'
import { useState } from 'react';
import './searchBar.css'

export default function SearchBar({...props}){

  const [searchText, setSearchText] = useState("");

  return (
    <>
    <div className='search-bar'>
        <input type="text" placeholder='Search' value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }} onKeyDown={(e)=>{
          if(e.key==="Enter"){
            const data = props.filterList(searchText);
            props.setList(data)
          }
        }} className='search-box'/>
        <button className="search-btn" onClick={
          ()=>{
            const data = props.filterList(searchText);
            props.setList(data);
          }
        }><i className="fa fa-search"></i></button>
    </div>
    </>
  )
}
