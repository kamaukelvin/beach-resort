import React from 'react'

// the props children is passed beacuse we have a banner inside the hero that we will modify in different pages
// the hero props will ensure different images of the hero for different pages
const Hero=({children, hero})=> {
    return (
        <div>
            {/* the props hero is passed as a className meaning we can have different classNames for different heros in different pages */}
            {/* the images are placed in css under the classNames hence different className= different image */}

           <header className={hero}>
           {children}
           </header>
        </div>
    )
}
export default Hero

// adding a default value for the hero props
// if this code is emitted the default is blank and if one fails to add a classNmae in the page while passing the prop,nothing is rendered
// the default prop for hero is the className defaultHero
// we dont have to add props to our Hero component while rendering it our page as it already has default props, only when we need a change of className from default hero to sth else
Hero.defaultProps ={
    hero: "defaultHero"
}