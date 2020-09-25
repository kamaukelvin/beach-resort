// steps indicated by comments

// 1. import react and usestate, createContext and useEffect if necessary
import React,{useState, useEffect, createContext} from 'react'
import items from "./data"


// 2. create context as follows,> decided to call the context RoomsContext for ease in identification

 const RoomsContext = createContext()

// 3. create a  Roomscontextprovider passing in  props

const RoomsContextProvider = (props)=>{

    // all states are declared here
    // userstate is commented to show where multiple state are placed
    // roomsstate will have state of rooms while userstate can have state of users(see commented state of name)
const [state, setState]= useState({
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading: true,
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    type:'all',
    breakfast:false,
    pets:false



})
                    // TESTING

                    // const [state, setState]= useState({
                    //         name:"Kelvin",
                    //         age: 30})


    // const [rooms ,setRooms]= useState([]);
    // const [sortedRooms ,setSortedRooms]= useState([])
    // const [featuredRooms ,setFeaturedRooms]= useState([])
    // const [loading ,setLoading]= useState(true)
    // const [capacity, setCapacity]= useState(1)
    // const [price, setPrice]= useState(0)
    // const [minPrice, setMinPrice]= useState(0)
    // const [maxPrice, setMaxPrice]= useState(0)
    // const [minSize, setMinSize]= useState(0)
    // const [maxSize, setMaxSize]= useState(0)
    // const [type, setType]= useState('all')
    // const [breakfast, setBreakfast]= useState(false)
    // const [pets, setPets]= useState(false)



// note how we set a state:: setRooms sets the value of rooms to the new modified rooms,setLoading sets the value of loading to false
useEffect(()=>{  
let rooms = formatData(items);
let featuredRooms = rooms.filter(room=> room.featured=== true)
    setState(state=>({...state,rooms:rooms}))
    setState(state=>({...state,featuredRooms:featuredRooms}))
    setState(state=>({...state,sortedRooms:rooms}))
    setState(state=>({...state,loading:false}))

 //   setting max price and max size in filter component to correspond to what value the slider is
// by doing this we ensure that if a user sets the slider, that is the corresponding max price and max size for the filter
    let maxPrice = Math.max(...rooms.map(item=>item.price))
    let maxSize = Math.max(...rooms.map(item=>item.size))
    setState(state=>({...state,maxPrice:maxPrice}))
    setState(state=>({...state,maxSize:maxSize}))
    setState(state=>({...state,price:maxPrice}))
  },[])



 const formatData=(items)=>{
    let tempItems = items.map(item=>{
    const id = item.sys.id
    const images = item.fields.images.map(image=>
                    image.fields.file.url);
    const room= {...item.fields, images, id}
    return room;
    });
    
    return tempItems
}
  
 const getRoom =(slug,rooms)=>{
    let tempRooms= [...state.rooms]
    const room =tempRooms.find(room=> room.slug===slug)
    return room
}
// for filter component in the select options 
const handleChange= event=>{

    const target= event.target
  
    // we check if the target is a checkbox, if true we use target.checked, if not we use the normal target.value
    const value = event.type ==='checkbox'?target.checked: target.value
    const name= event.target.name;
    setState({
        [name]:value})
 

}
const filterRooms=()=>{
    console.log("filter method")
}


return(

    // 5. return the Roomscontext.provider with the default value as the respective states  and the context.provider should wrap props.children
  
    
    <RoomsContext.Provider value={{ getRoom, handleChange,state,setState}}>{props.children}</RoomsContext.Provider>

 
)}

// 6. export RoomsContextProvider, RoomsConsumer, RoomsContext
const RoomsConsumer = RoomsContext.Consumer;
export { RoomsContextProvider, RoomsConsumer, RoomsContext}


//7. see featured rooms component/ single room for continuation on how to consume the data from context