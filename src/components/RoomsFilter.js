import React,{useContext} from 'react'
import {RoomsContext} from "../Context"
import Title from '../components/Title'
import { FaAddressCard, FaAlignJustify } from 'react-icons/fa'

// get all unique values
const getUnique = (items,value)=>{

    return [...new Set(items.map(item =>item[value]))]
 
}


const RoomsFilter=({rooms})=> {
    const state= useContext(RoomsContext)
    const {handleChange}= state
    const {type,capacity,price, minPrice, maxPrice, minSize, maxSize,breakfast,pets}=state.state
  
    // get unique types i.e.in roomtype we have types of single, presedential, double, family
    let types = getUnique(rooms, "type")
  
    // add all option
    types= ['all', ...types]
    // map to jsx
    types= types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
                <form className="filter-form">
                 {/* select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                        </select>
                    </div>
                 {/* end of select type */}
                </form>
        </section>
    )
}
export default RoomsFilter