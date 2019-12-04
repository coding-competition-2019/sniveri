import React, { useContext, useEffect } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Slider, Typography, TextField } from '@material-ui/core';

import StateContext from '../misc/StateContext';
import Axios from "axios";

const activities = ['tennis', 'volleyball'];

/**
 * @param props
 * @param {function} props.onSubmit
 * @param {boolean} [props.renderButtons=false]
 */

export default function SearchForm(props) {
  const [ state , dispatch] = useContext(StateContext);

  const sendRequest = async () => {
    //console.log('d' + state);
    try {

				const x = {
						activities: state.filter.activities || [],
						latitude: state.userLocation.latitude,
						longitude: state.userLocation.longitude,
						distance: state.filter.radius,
				};
      // const {data} = axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${}`')
      const {data} = await Axios({
							url: 'http://10.4.82.116:9090/service/getAllByLoc',
							//url: 'http://10.4.82.116:9090/service/getAllByLoc?' + qs,
							//url:
							method: 'get',
							params: x
					});
      /*const data = [
        {
          name: 'AIKIDO klub Praha',
          url: 'https://www.activepass.cz/partner/aikido-klub-praha',
          address: {
            street: 'Karlovo náměstí 293/13',
            zipCode: '12000',
            city: 'Praha 2'
          },
          activities: ['aikido']
        },
        {
          name: 'Amande wine wellness hotel',
          url: 'https://www.activepass.cz/partner/amande-wine-wellness-hotel',
          address: {
            street: 'Husova 8',
            zipCode: '69301',
            city: 'Hustopeče'
          },
          activities: ['kuželky']
        }
      ];*/
      dispatch({
        type: 'STORE_PLACES',
        places: data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onActivityChange = async (e, value) => {
    await dispatch({
      type: 'CHANGE_ACTIVITY',
      value
    });
  };
  const onRadiusChange = (e, value) => {
    dispatch({
      type: 'CHANGE_RADIUS',
      value
    });
  };

  useEffect(() => {
    if(state) {
      sendRequest()
    }
  })

  return (
    <div>
      <div
        style={{
          borderRadius: '5px',
          padding: '0 20px 20px',
          background: 'white',
          margin: '10px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)'
        }}
      >
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
          value={state.filter.activities}
        />
        <Typography id="radius-slider-label" gutterBottom>
          Distance radius (km)
        </Typography>
        <Slider
          value={state.filter.radius}
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
  );
}
