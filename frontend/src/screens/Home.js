import React, { useEffect, useContext } from 'react';

import SearchForm from "../components/SearchForm";
import FilterContext from "../misc/StateContext";

import Map from '../components/Map';

export default function Home () {

	const [ state, dispatch ] = useContext(FilterContext);

	useEffect(() => {
		if (!('geolocation' in navigator)) alert('no geo support');
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			dispatch({
				type: 'GET_USER_LOCATION',
				location: coords,
			});
		},null, {
			enableHighAccuracy: true
		});
	});

	const style = {

	};
  
	return <div>
		<Header />
		<Map center={state.userLocation}/>
		<SearchForm/>
	</div>;
}

function Header () {
	const style = {

	};
	return <div style={style}>Logo</div>
}
