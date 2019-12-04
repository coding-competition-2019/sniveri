import React, { useEffect, useContext } from 'react';

import SearchForm from "../components/SearchForm";
import FilterContext from "../misc/StateContext";

import Map from '../components/Map';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'

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

	return <div style={{
		position: 'relative',
		height: '100vh',
		width: '100vw'
	}}>
		<Header />
		<Map center={state.userLocation}/>
		<SearchForm />
	</div>;
}

function Header () {
	return <div style={{
		zIndex: 1,
		padding: '10px 15px',
		background: 'white',
		position: 'absolute',
		top: '15px',
		left: '15px',
		borderRadius: '50px'
	}}>Our Great App</div>
}
