import React,{useContext} from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import Services from "../components/Services"
import FeaturedRooms from "../components/FeaturedRooms"



const Home=()=> {
    return (
        <div>

            {/* note location of banner is inside hero tags to palce it in the hero component */}
         <Hero>
         <Banner title="luxurious rooms" subtitle="deluxe rooms starting at Ksh 29900">
           <Link to="/rooms" className="btn-primary">
               View Rooms
           </Link>
         </Banner>
         </Hero>
         <Services/>
         <FeaturedRooms/>
      
        </div>
    )
}

export default Home