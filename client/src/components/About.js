import React, { useState, useEffect } from "react";

 
export default function About(props) {
  //set up state to track individual restaurants
  const [bar, setBar] = useState({
    id: "",
    name: "",
    address: "",
    phone: "",
    hours: "",
    lat: "",
    long: "",
  });
  //fetching from restaurant api and updating restaurant info to state 
  useEffect(() => {
    if (bar.id === "") {
      fetch(`/restaurants/${props.match.params.id}`).then((res) => res.json()).then((barInfo) => {
          setBar(barInfo)
      })
      
    }
  });
  //displaying individual restaurant info on page
  return (
    <div>
    <h2>{bar.name}</h2>
    <h3>{bar.address}</h3>
    <h3>{bar.phone}</h3>
    <h3>{bar.hours}</h3>
    </div>
  )

}
