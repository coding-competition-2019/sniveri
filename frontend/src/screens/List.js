import React, { useContext } from 'react';
import mockList from '../misc/mock-places';
import ListItem from '../components/ListItem';
import Grid from '@material-ui/core/Grid';
import StateContext from '../misc/StateContext';

export default function List() {
  const [ state, dispatch ] = useContext(StateContext);
  const data = state.places;
  return (
    <Grid container style={{ maxWidth: 1400, margin: 'auto' }} justify="center">
      {data.map((place,i) => (
        <Grid key={i} container item xs={12} md={6} lg={4} spacing={3} justify="center">
          <ListItem {...place} key={place.name} />
        </Grid>
      ))}
    </Grid>
  );
}
