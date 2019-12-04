/* eslint-disable */
import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map(x) {

  const {latitude,longitude} = x.center
  const center = {lat: latitude, lng: longitude}

  return(
    <div style={{
      width: '100vw',
      height: '100vh'
    }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBkDk5yFzmi2Nn14YKZI_tjTLuNaN27gUs' }}
          defaultCenter={center}
          defaultZoom={16}
      >
      </GoogleMapReact>
    </div>
  )
};
