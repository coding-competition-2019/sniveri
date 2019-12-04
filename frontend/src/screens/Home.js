import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


import SearchForm from "../components/SearchForm";
import FilterContext from "../misc/StateContext";

export default function Home () {

	const [ state, dispatch ] = useContext(FilterContext);

	useEffect(() => {
		if (!('geolocation' in navigator)) alert('no geo support');
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			dispatch({
				type: 'GET_USER_LOCATION',
				/*location: {
					lat: coords.latitude,
					lng: coords.longitude,
				},*/
				location: coords,
			});
		});
	});

	return <div>
		<Header />
		<SearchForm />
		<Link to='/list'>
			<Button
				variant='contained'
				color='primary'
			>
				Search
			</Button>
		</Link>
	</div>;
}

function Header () {
	return <div style={{
		height: '40px',
	}}>Our Great App</div>
}
