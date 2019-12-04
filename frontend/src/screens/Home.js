import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import SearchForm from "../components/SearchForm";
import FilterContext from "../misc/StateContext";

import Map from '../components/Map';
import List from './List'

export default function Home () {

	const [ state, dispatch ] = useContext(FilterContext);

	useEffect(() => {
		if (!('geolocation' in navigator)) alert('no geo support');
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			dispatch({
				type: 'GET_USER_LOCATION',
				location: coords,
			});
			(async function() {
			try {
				const x = {
						activities: state.filter.activities,
						lat: coords.latitude,
						lng: coords.longitude,
						radius: state.filter.radius,
				};
				console.log(x);
					//const {data} = await axios.post('', x);
				const data = [
					{
						"name": "AIKIDO klub Praha",
						"url": "https://www.activepass.cz/partner/aikido-klub-praha",
						"address": {
							"street": "Karlovo náměstí 293/13",
							"zipCode": "12000",
							"city": "Praha 2"
						},
						"activities": ["aikido"]
					},
					{
						"name": "Amande wine wellness hotel",
						"url": "https://www.activepass.cz/partner/amande-wine-wellness-hotel",
						"address": {
							"street": "Husova 8",
							"zipCode": "69301",
							"city": "Hustopeče"
						},
						"activities": ["kuželky"]
					}
				]
					setTimeout(() => {
					dispatch({
							type: 'STORE_PLACES',
							places: data,
					});
					}, 1000)

			} catch(err) {
				console.log(err)
			}
		})()
		},null, {
			enableHighAccuracy: true,
			maximumAge: 2000
		});



	}, []);

	return <div style={{
		position: 'relative',
		height: '100vh',
		width: '100vw'
	}}>
		<Header />
		<Map center={state.userLocation}/>
		<div style={{
			position: 'absolute',
			top: '50vh',
			width: '100%',
		}}>
				<SearchForm/>
				<List/>
		</div>
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
		borderRadius: '50px',
		fontWeight: '700'
	}}>Not Google maps</div>
}
