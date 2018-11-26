import React, { Component } from 'react';
import './App.css';
// import Map from './components/Map.js'
import GoogleMaps from "simple-react-google-maps"



class App extends Component {
  render() {
    return (
       <GoogleMaps
        apiKey = {"AIzaSyBoPPKuvvE0W8dwOfm87Qd3m2RxZTwmHmo"}
        style={{height: "400px", width: "100%"}}
        zoom={10}
        center={{lat: 36.184568, lng: -86.647630}}
        markers={
          [
          {lat: 36.203893, lng: -86.677757}
          ]
        }
       />
    );
  }
}

export default App;

 
