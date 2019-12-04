import React from 'react';
import mockList from '../misc/mock-places';
import ListItem from '../components/ListItem';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function List() {
  const itemsList = mockList.places.map(place => {
    return <ListItem {...place} key={place.name} />;
  });

  return (
    <Grid container spacing={2}>
     {mockList.places.map(place => 
      (<Grid container item xs={12} sm={6} lg={4} spacing={3}>
        <ListItem {...place} key={place.name} />
      </Grid>)
     )}
    </Grid>
  );

  // return <div style={{ maxWidth: '1200px', margin: 'auto', padding: 10}}>
  //   {itemsList}
  // </div>
}
