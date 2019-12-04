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
        <currentIcon
          lat={59.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
    </div>
  )
};

const currentIcon = () => <div style={{
  content: '',
  display: 'block',
  width: '10px',
  height: '10px',
  background: 'red'
}}></div>
