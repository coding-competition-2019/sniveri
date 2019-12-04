/* eslint-disable */
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {
  const center = {lat: 59.95, lng: 30.33}

  return(
    <div style={{
      width: '100vw',
      height: '100vh'
    }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBkDk5yFzmi2Nn14YKZI_tjTLuNaN27gUs' }}
          defaultCenter={center}
          defaultZoom={11}
      >
      </GoogleMapReact>
    </div>
  )
};
