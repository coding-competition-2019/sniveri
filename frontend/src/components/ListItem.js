import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 15
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
    <Paper
      className={classes.root}
      style={{
        height: 200,
        maxWidth: 600,
        display: 'flex',
        alignItems: 'items',
        borderRadius: '5px'
      }}
      elevation={5}
    >
      <Grid container justify="center">
        <Grid
          item
          xs={5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            padding: '0 10px'
          }}
        >
          <img
            src="https://www.fitfuture.cz/wp-content/uploads/2018/09/38029558_2099363863658667_7964592795425964032_n.jpg"
            alt="place"
            style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}
          ></img>
        </Grid>
        <Grid item xs={7} style={{ textAlign: 'left', padding: 20 }}>
          <h4>{name}</h4>
          <p style={{ fontSize: 12 }}>
            {`${address.street}, ${address.city}, ${address.zipCode}`}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <div> 3.5 km</div>
            <Button variant="outlined" color="primary">
              <Icon
                style={{
                  fontSize: '20px',
                  marginRight: '5px'
                }}
              >
                share
              </Icon>{' '}
              Share
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
