import React from 'react';
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
        <CurrentPlace
          lat={latitude}
          lng={longitude}
        />
      </GoogleMapReact>
    </div>
  )
};

const CurrentPlace = () => (<svg 
style={{
  borderRadius: '50px',
  boxShadow: '0 0 4px 19px #128ad03b',
  fill: 'blue'
}}
xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/><path fill="none" d="M0 0h24v24H0z"/></svg>)