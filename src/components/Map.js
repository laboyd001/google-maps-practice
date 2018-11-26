import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from 'react-google-maps'


class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
      // two props passed to GoogleMap are defaultCenter and defaultZoom; center needs coords and zoom needs some number
        defaultCenter={{
          lat: 40.756795,
          lng: -73.954298
        }}
        defaultZoom={13}
      />
    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={
            <div
              style={{
                height: `500px`,
                width: "500px"
              }}
            />
          }
          mapElement={
            <div
              style={{
                height: `100%`
              }}
            />
          }
        />
      </div>
    );
  }
}

export default Map;
