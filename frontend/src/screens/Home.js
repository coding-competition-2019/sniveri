import React, { useEffect, useContext } from 'react';


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

	const style = {

  };
  
	return <div>
		<Header />
		<SearchForm/>
	</div>;
}

function Header () {
	const style = {

	};
	return <div style={style}>Logo</div>
}
