import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '20px 0'
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: 0,
    maxHeight: 300,
    textAlign: 'left',
    borderRadius: 30
  }
}));

export default function ListItem({ name, address, activities }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container style={{ maxHeight: 300 }}>
        <Grid item xs={5} p={0}>
            <img
              src="https://www.fitfuture.cz/wp-content/uploads/2018/09/38029558_2099363863658667_7964592795425964032_n.jpg"
              alt="place"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            ></img>
        </Grid>
        <Grid item xs={7} style={{ textAlign: 'left', padding: 20 }}>
          <h4>{name}</h4>
          {activities.slice(0, 3).map(activity => (
            <Chip label={activity} style={{ margin: 2 }} />
          ))}
          <p style={{ fontSize: 12 }}>
            {`${address.street}, ${address.city}, ${address.zipCode}`}
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div> 3.5 km</div>
            <Button variant="outlined" color="primary">
              share
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
