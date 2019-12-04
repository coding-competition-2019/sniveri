import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SharePlaceForm from './SharePlaceForm';
import friends from '../misc/mock-friends';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    minWidth: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5
  }
}));

export default function SimpleModal({ name }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
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
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div>
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">
              Share place {name} with your friends
            </h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <SharePlaceForm friends={friends} />
          </div>
        </div>
      </Modal>
    </div>
  );
}
