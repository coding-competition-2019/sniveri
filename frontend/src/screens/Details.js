import React, {useContext, useState,useEffect} from 'react';
import {
		Typography,
		Chip,
		makeStyles,
		Button,
		Icon, CircularProgress,
} from "@material-ui/core";

import StateContext from '../misc/StateContext';
import axios from "axios";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	chipContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(0.5),
		},
	},
	icon: {
		fontSize: '20px',
		marginRight: '5px',
	},
	buttonDiv: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		'> * ': {
			flex: 1,
			fontSize: '70px',
		},
		//fontSize: '25px',
		marginTop: '30px',
	},
	link: {
		textDecoration: 'none',
	},
	img: {
		height: '250px',
		objectFit: 'cover',
		width: '100%',
		maxWidth: '600px',
		margin: 'auto',
		marginBottom: '10px',
		borderRadius: '3px',
	},
	main: {
		padding: '20px'
	},
	actHeader: {
		margin: '30px 0 10px'
	},
	addressLine: {
		display: 'flex',
		'& :nth-child(1)': {
			marginRight: '0.7ch',
		},
	},
}));

const formatAddress = ({street, zipCode, city}) => `${street}, ${zipCode} ${city}`;
	const place = {
		img: {
			url: 'https://picsum.photos/600/300',
			alt: 'image',
		},
		distance: '3.5km',
		"name": "AFIT Fitness Centrum",
		"url": "https://www.activepass.cz/partner/afit-fitness-centrum",
		"address": {
			"street": "Táborská 157",
			"zipCode": "61500",
			"city": "Brno"
		},
		coords: {
			lat: '50',
			lng: '49',
		},
		"activities": [
			"bosu",
			"body and mind",
			"pilates",
			"spinning (indoor cycling)",
			"h.e.a.t.",
			"kardiozóna",
			"posilovna",
			"aerobic a jiné",
			"fitness",
			"power jóga – energy jóga",
			"boot camp",
			"core fitness",
			"body pump",
			"funkční trénink",
			"hard core tréninky",
			"kettlebells",
			"kruhové tréninky",
			"flowin",
			"open class lekce",
			"trx"
		]
	};
	// can delete all the above once data is recvd from backend

export default function Details () {
	const [ { userLocation } ] = useContext(StateContext);

	const [ fst, sfst ] = useState(null);

		useEffect(() => {
				//axios.get('/').then(({ data }) => {
						let data = place;
						sfst(data);
				//});
		}, []);

	const styles = useStyles();


	const activities = place.activities.map((str, i) => <Chip
		variant='outlined'
		key={i}
		label={str} />);
	const MAX_ACT_DEFAULT = 5;
	const [ showAllActivities, setShowAllActivities ] = useState(false);
	const toggleShowAllActivities = () => setShowAllActivities(!showAllActivities);



	const dirParams = Object.entries({
		// see https://developers.google.com/maps/documentation/urls/guide#parameters_1
		origin: `${userLocation.latitude},${userLocation.longitude}`,
		destination: `${place.coords.lat},${place.coords.lng}`
	}).reduce((prev, [k, v]) => `${prev}&${k}=${v}`, '');
	const directionsUrl = `https://www.google.com/maps/dir/?api=1${dirParams}`;

	if (!fst) return <div style={{display:'flex', width: '100%' , marginTop: '30px' }}><CircularProgress style={{margin:'auto'}} /></div>;

	return <div className={styles.root}>
		<img src={place.img.url} alt={place.img.alt} className={styles.img}/>
		<div className={styles.main}>
			<Typography variant='h4'>{place.name}</Typography>

			<div className={styles.addressLine}>
				<Typography component='address'>{formatAddress(place.address)}</Typography> <Typography>({place.distance} away)</Typography>
			</div>

			<Typography variant='h5' className={styles.actHeader}>Provided activities</Typography>
			<div className={styles.chipContainer} style={{
				width: '100%',
				display: 'flex',
				flexDirection: 'row',
			}}>
				{showAllActivities || activities.length <= MAX_ACT_DEFAULT ? activities :
					[...activities.slice(0, MAX_ACT_DEFAULT-1), <Chip variant='outlined' key={-1} label='...' onClick={toggleShowAllActivities} />]
				}
			</div>
			<div className={styles.buttonDiv}>
				<Button variant='outlined' color='primary'><Icon className={styles.icon}>share</Icon> Share</Button>
				<Button variant='outlined' color='primary'>URL</Button>
				<a className={styles.link} href={directionsUrl}>
					<Button variant='outlined' color='primary'>
						<Icon className={styles.icon}>directions</Icon>
						Navigate
					</Button>
				</a>
			</div>
		</div>
	</div>;
}
