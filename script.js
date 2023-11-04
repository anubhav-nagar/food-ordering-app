import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer.jsx";

import CardsShimmer from "./components/CardsShimmer";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
// import About from "./components/About";
import Contact from "./components/Contact"
import {lazy} from 'react'
import { Suspense } from "react";

const About = lazy(()=>import("./components/About"))

const App = () => {
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
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <Suspense> <About/> </Suspense>
      },
      {
        path: '/support',
        element: <Contact />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
