import React from 'react'
import Room from './Room'




const RoomsList=({sorted})=> {
  
    if (sorted.length===0){
        return (
            <div className="empty-search">
                <h3>No rooms matched your search parameters</h3>
            </div>
        )
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sorted.map(item=>{
                    return <Room key={item.id} room={item}/>
                })}
            </div>
        </section>
        
    )
}
export default RoomsList