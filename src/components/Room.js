import React from 'react'
import {Link} from "react-router-dom"
import defaultImg from "../images/room-1.jpeg"
import PropTypes from "prop-types"

 const Room=({room})=> {
     const {name,slug,images,price}= room
    return (
        <article className="room">
            <div className="img-container">
                {/* we use a default image incase one of images in the array cannot be retrieved, the default image is displayed instead */}
                <img src={images[0] || defaultImg}  alt=""/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>

        </div>
        <p className="room-info">{name}</p>
        </article>
    )
}
export default Room

Room.propTypes={
  room:PropTypes.shape({
      name:PropTypes.string,
      slug:PropTypes.string,
      images:PropTypes.arrayOf(PropTypes.string),
      price:PropTypes.number
  }).isRequired  
}