// 8. import useContext and Roomscontext(and any other context available)

import React,{useContext} from 'react'
import {RoomsContext} from "../Context"
import Loading from "./Loading"
import Title from "./Title"
import Room from "./Room"




const FeaturedRooms=() =>{
// 9. here we declare all the items (by destructuring) we intend to use and we use usecontext to show which context we getting the data from or we are referencing 
    const state = useContext(RoomsContext)
    const {loading, featuredRooms}= state.state


// TEST
//    console.log(state)
//    useEffect(()=>{
//        setState(state=>({...state,age:20}))
//    },[])



// 10. featuredRooms from context is used here...
// featuredRooms are mapped to return  a single room 

    const rooms= featuredRooms.map(room=>{
        return <Room key={room.id} room={room}/>
    })
    return(
            <React.Fragment>
                 
                 <section className="featured-rooms">
                <Title title="featured rooms"/>
                <div className="featured-rooms-center">
             {loading?<Loading/>:rooms}
                   </div>
            
            </section>
           
            </React.Fragment>
            )
    


}
export default FeaturedRooms