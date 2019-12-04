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

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
};

export default function SearchForm () {
	const initialState = {};
	const [state, dispatch] = useReducer(formReducer, initialState);
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
				defaultValue={20}
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
		/>
	</div>;
}
