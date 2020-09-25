import React,{useContext} from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
import {RoomsContext} from "../Context"
import StyledHero from "../components/StyledHero"

 const SingleRoom=(props) =>{

  // declaring everything we want to use in this component from the context and then destructure all we want to use in component
  const context= useContext(RoomsContext)
  const {getRoom, defaultBcg} = context
  const slug = props.match.params.slug
  const room = getRoom(slug)
 if(!room){
   return <div className="error">
     <h3>No such room found...</h3>
     <Link to="/rooms" className="btn-primary">
       Back to Rooms
     </Link>
   </div>
 }
 const {name, description, capacity,size, price, extras,breakfast, pets, images}=room
//  destructing the images array we getting fom the room
// this is useful incase we have an array of images and we want to display just a few images instead of all of them
  const [mainImg, ...defaultImg]=images;
  //in our case the mainimg is the images dispalyed in our hero section while the default img is the rest of the images in the array
  // we dont plan on displaying the main img on the area with smaller pics just the rest of the images
  // we map over the defaultImg to display the three pics
return(
     <>
    <StyledHero img={mainImg}>
      <Banner title={`${name} room`}>
      <Link to="/rooms" className="btn-primary">
        Back to rooms
      </Link>
      </Banner>
    </StyledHero>
    <section className="single-room">
      <div className="single-room-images">
        {defaultImg.map((item,index)=>{
           return<img key={index} src={item} alt={name}/>
        })}
       
      </div>
      <div className="single-room-info">
        <article className="desc">
          <h3>Details</h3>
          <p>{description}</p>
        </article>
        <article className="info">
          <h3>Info</h3>
          <h6>price: ${price}</h6>
          <h6>size: {size}SQFT</h6>
          <h6>
            {/* conditional rendering if capacity is more than one it should be people is not it should be a person:::: this is to avoid a render of lets say 1 people or 4 person */}
            max capacity :{""}
            {capacity>1?`${capacity} people`:`${capacity} person`}
          </h6>
          <h6>{pets? "pets allowed":"no pets allowed"}</h6>

          <h6>{breakfast && "free breakfast included"}</h6>
        </article>
      </div>
    </section>
    <section className="room-extras">
      <h6>Extras</h6>
      <ul className="extras">
        {extras.map((item,index)=>{
          return <li key={index}>- {item}</li>
        })}
      </ul>
    </section>
    </>
 
   )
}
export default SingleRoom