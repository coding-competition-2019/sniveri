import React, {useContext} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
	Slider,
	Typography,
	TextField
} from "@material-ui/core";

import FilterContext from '../misc/FilterContext';


const activities = [
	'tennis',
	'volleyball',
];

export default function SearchForm () {
	const [state, dispatch] = useContext(FilterContext);
	const onActivityChange = (e, value) => {
		dispatch({
			type: 'CHANGE_ACTIVITY',
			value,
		});
	};
	const onRadiusChange = (e, value) => {
		dispatch({
			type: 'CHANGE_RADIUS',
			value,
		});
	};

	return <div style={{
		display: 'flex',
		flexDirection: 'column',
		width: '90%',
		margin: 'auto',
	}}>
		<div style={{
			flex: 1,
		}}>
			<Typography id='radius-slider-label' gutterBottom>Distance radius (km)</Typography>
			<Slider
				value={state.radius}
				aria-labelledby="radius-slider-label"
				valueLabelDisplay="auto"
				step={1}
				marks
				min={0}
				max={50}
				onChange={onRadiusChange}
			/>
		</div>
		<Autocomplete
			multiple
			//id="tags-standard"
			options={activities}
			getOptionLabel={option => option}
			renderInput={params => (
				<TextField
					{...params}
					variant="standard"
					label="Activities"
					margin="normal"
					fullWidth
				/>
			)}
			onChange={onActivityChange}
			value={state.activities}
		/>
	</div>;
}
