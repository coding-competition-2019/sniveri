import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Link} from 'react-router-dom';

export default function Map(x) {

  const {latitude,longitude} = x.center
  const center = {lat: latitude, lng: longitude}
  
  // const data = x.data
  const data = [
    {
      lat: 50.1037356,
      lng:14.390930800000001
    }
  ]

  return(
    <div style={{
      width: '100vw',
      height: '100vh'
    }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBkDk5yFzmi2Nn14YKZI_tjTLuNaN27gUs' }}
          defaultCenter={center}
          defaultZoom={18}
      >
        <CurrentPlace
          lat={latitude}
          lng={longitude}
        />
        {data.map((i,index) =>
          <Place
            key={index}
            id={i.id}
            lat={i.lat}
            lng={i.lng}
          />
        )}
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

const Place = ({id}) => (
<Link to={`/details/${id}`}>
  <svg
  style={{
    height: '48px',
    width: '48px',
    fill: 'red'
  }}  
  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
</Link>)