import React from 'react';
import mockList from '../misc/mock-places';
import ListItem from '../components/ListItem';
import Grid from '@material-ui/core/Grid';

export default function List() {
  return (
    <Grid container style={{ maxWidth: 1400, margin: 'auto' }} justify="center">
      {mockList.places.map((place,i) => (
        <Grid key={i} container item xs={12} md={6} lg={4} spacing={3} justify="center">
          <ListItem {...place} key={place.name} />
        </Grid>
      ))}
    </Grid>
  );
}
