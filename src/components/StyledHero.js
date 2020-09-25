// aim of this componnet is to display a different hero image everytime we link to a different category of single room 

import styled from "styled-components"
import defaultImg from "../images/room-1.jpeg"

// as per styled components rules on the left side of the equals sign we name what we are styling (styledhero) we can name this one anything we wish
// on the RHS, we have to start with the word styled. followed by a html tag(note it must be a html tag..., header, button, paragraph) i.e header
// inside the template strings`` we put our css abd javascript
// we pass in props("img" is the props name) to make the background image dynamic
const StyledHero = styled.header`
 min-height: 60vh;
  background: url(${props=>props.img ? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledHero


// Notes

// 1. defaultImg is used as a fallback image incase for some reason the required image is not retrieved, the default one is displayed instead of leaving it blank 
// code line 12 means we check if image props(props.img) is being passed, if so render the props, if not passed render the default image(defaultImg)