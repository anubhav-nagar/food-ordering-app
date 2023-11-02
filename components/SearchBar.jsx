import React from 'react'
import { useState } from 'react';
// import './searchBar.css'
import { filterList } from '../utils/helper';

export default function SearchBar({...props}){

  const [searchText, setSearchText] = useState("");

  return (
    <>
    <div className='absolute right-[36%] top-5'>
        <input type="text" placeholder='"Reastaurant name"' value={searchText} onChange={(e) => {
          setSearchText(e.target.value);
        }} onKeyDown={(e)=>{
          if(e.key==="Enter"){
            const data = filterList(searchText);
            props.setList(data)
          }
        }} className='p-4 h-8 rounded-md border-2 text-sm focus:outline-none focus:shadow-outline'/>
        <button className="p-2 text-sm border-2 ml-3 text-white bg-gray-500 hover:bg-black rounded-md" onClick={
          ()=>{
            const data = filterList(searchText);
            props.setList(data);
          }
        }>Search</button>
    </div>
    </>
  )
}
