import React, {useContext} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
	Slider,
	Typography,
	TextField,
} from "@material-ui/core";

import StateContext from '../misc/StateContext';


const activities = [
	'tennis',
	'volleyball',
];

/**
 * @param props
 * @param {function} props.onSubmit
 * @param {boolean} [props.renderButtons=false]
 */
export default function SearchForm (props) {
	const [ { filter: state }, dispatch] = useContext(StateContext);
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

	return(
		<div>
			<div style={{
				borderRadius: '5px',
				padding: '20px',
				background: 'white',
				margin: '10px',
				boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
			}}>
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
		</div>
	)
}
