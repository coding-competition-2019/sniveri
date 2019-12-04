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

  const handleOpen = e => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = e => {
    e.stopPropagation();
    e.preventDefault();
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
        onClick={e => e.stopPropagation()}
      >
        <div style={{}}>
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">
              Share place {name} with your friends
            </h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <SharePlaceForm friends={friends} />
            <div
              style={{
                margin: '30px 0 20px 10px',
                width: 250,
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ padding: 13 }} className="share-place-icon">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-512.png"
                  alt="messenger"
                  style={{ width: 60 }}
                ></img>
              </div>
              <div style={{ padding: 13 }} className="share-place-icon">
                <img
                  src="http://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png"
                  alt="messenger"
                  style={{ width: 60 }}
                ></img>
              </div>
              <div style={{ padding: 13 }} className="share-place-icon">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/chat-messages-1/128/Chat_Messages_sms_mobile_phone-512.png"
                  alt="messenger"
                  style={{ width: 60 }}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
