import React from 'react'


// pass props so we can be able to modify as per page
// children in this case is anything within this component > this includes the button
// title prop is the heading on the banner
// subtitle prop is the subtitle text on the banner
const Banner=({children, title, subtitle})=> {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
            
        </div>
    )
}
export default Banner