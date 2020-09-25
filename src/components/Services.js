import React, {useState} from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"


const Services=()=> {
    const [services, setServices]= useState([{icon:<FaCocktail/>, title: "free cocktails", info:"Lorem ipsum sit amet consectetuur adipissing elit. Magni, corporis!"},{icon:<FaHiking/>, title: "endless Hiking", info:"Lorem ipsum sit amet consectetuur adipissing elit. Magni, corporis!"},
    {icon:<FaShuttleVan/>, title: "free shuttle", info:"Lorem ipsum sit amet consectetuur adipissing elit. Magni, corporis!"},{icon:<FaBeer/>, title: "strongest beer", info:"Lorem ipsum sit amet consectetuur adipissing elit. Magni, corporis!"}])
  
    return (
        <div>
            <section className="services">
          <Title title="services"/>
          <div className="services-center">
              {services.map((item, index)=>{
                  return <article key={index} className="services">
                      <span>{item.icon}</span>
                      <h6>{item.title}</h6>
                      <p>{item.info}</p>
                  </article>
              })}
          </div>
          </section>
        </div>
    )
}
export default Services