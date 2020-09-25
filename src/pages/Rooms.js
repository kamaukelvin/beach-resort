import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import RoomsContainer from "../components/RoomsContainer"

const Rooms=()=> {
    return (
        <div>
          <Hero hero="roomsHero">
              <Banner title="Our rooms">
                <Link to="/rooms" className="btn-primary">More Rooms</Link>
              </Banner>
            </Hero>
            <RoomsContainer/>
        </div>
    )
}
export default Rooms