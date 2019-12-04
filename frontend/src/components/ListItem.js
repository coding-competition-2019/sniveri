import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link }  from 'react-router-dom';
import SharePlaceModal from '../components/SharePlaceModal';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    color: theme.palette.text.secondary,
    padding: 0,
    maxHeight: 300,
    textAlign: 'left',
    borderRadius: 30
  },
  link: {
    textDecoration: 'none',
    '& :hover': {
      backgroundColor: '#eee',
    },
  },
}));

let a = 0;

export default function ListItem(props) {
  const classes = useStyles();
  const { name, address, distance, id = a++ } = props;
  return (
    <Link to={`/details/${id}`} className={classes.link}>
    <Paper
      className={classes.root}
      style={{
        height: 200,
        maxWidth: 600,
        display: 'flex',
        alignItems: 'items',
        borderRadius: '5px',
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
              {address}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <div>{distance} km</div>
            <SharePlaceModal {...props} />
          </div>
        </Grid>
      </Grid>
    </Paper>
    </Link>
  );
}
