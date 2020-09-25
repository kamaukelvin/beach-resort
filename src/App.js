import React from 'react';
import './App.css';
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Route, Switch} from "react-router-dom"
import Navbar from "./components/Navbar"



function App() {
  return (

    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact  path="/rooms/" component={Rooms}/>

      {/* rendering a route with children in it> we use a /colon then variable name(can be any name of choice) */}

      <Route exact path="/rooms/:slug" component={SingleRoom}/>

      {/* when wrong path is input error page is rendered */}

      <Route component={Error}/>
      </Switch>
    </div>

  

  );
}

export default App;
