import React,{useContext} from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomsContext} from '../Context'
import Loading from './Loading'

const RoomsContainer=()=> {
    const state= useContext(RoomsContext)
    const {loading, sortedRooms, rooms}= state.state


    if (loading){
        return <Loading/>
    }
    return (
         <div>
           <RoomsFilter rooms={rooms}/>
           <RoomsList sorted={sortedRooms}/> 
        </div>
         ) 
        
    }

export default RoomsContainer