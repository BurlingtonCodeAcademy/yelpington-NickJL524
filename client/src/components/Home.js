//Imports
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
    //setting up state to track restaurant titles from an array
    const [restaurantTitles, setRestaurantTitles] = useState([])
    
 
    useEffect(() => {
        //if restaurant titles array is empty then fetch to /restaurants and add all restaurants to title list
        if(restaurantTitles.length === 0) {
            fetch('/restaurants')
            .then((res) => res.json())
            .then(titleList => {
                setRestaurantTitles(titleList)
            })
        }
    })
    return (
        //mapping over restaurant array and displaying restaurant id in a list
         <div>
       
            <h1 style={{ textAlign: "center" }}>Restaurant List</h1>
            <ul>
                
                {restaurantTitles.map((id, index) => {
                    return <h3 key={index}><Link to={`/restaurant/${id}`}>{id.replace('-', ' ')}</Link></h3>
                })}
            </ul>
        </div>
    )
}

export default Home






