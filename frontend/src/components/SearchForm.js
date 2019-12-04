import React, { useReducer } from 'react';
import produce from 'immer';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
	Slider,
	Typography,
	TextField
} from "@material-ui/core";

function formReducer (state, action) {
	console.log(action);
	switch (action.type) {
		case 'CHANGE_ACTIVITY':
			return produce(state, state => {
				state.activities = action.value;
			});
		case 'CHANGE_RADIUS':
			return produce(state, state => {
				state.radius = action.value;
			});
		default:
			return state;
	}
}


const activities = [
	'tennis',
	'volleyball',
];

export default function SearchForm () {
	const initialState = {};
	const [state, dispatch] = useReducer(formReducer, initialState);
	// radius + aktivita
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

	return <div>
		<Typography id='radius-slider-label' gutterBottom>Distance radius</Typography>
		<Slider
			defaultValue={20}
			aria-labelledby="radius-slider-label"
			valueLabelDisplay="auto"
			step={1}
			marks
			min={0}
			max={50}
			onChange={onRadiusChange}
		/>
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
		/>
	</div>;
}
