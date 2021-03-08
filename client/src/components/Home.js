import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
    const [restaurantTitles, setRestaurantTitles] = useState([])
    

    useEffect(() => {
        if(restaurantTitles.length === 0) {
            fetch('/restaurants')
            .then((res) => res.json())
            .then(titleList => {
                setRestaurantTitles(titleList)
            })
        }
    })
    return (
         <div>
       
            <h1 style={{ textAlign: "center" }}>YELPINGTON!</h1>
            <ul>
                
                {restaurantTitles.map((title, index) => {
                    return <h3 key={index}><Link to={`/restaurant/${title}`}>{title.replace('-', ' ')}</Link></h3>
                })}
            </ul>
        </div>
    )
}

export default Home






