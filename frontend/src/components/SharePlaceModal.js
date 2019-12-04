import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SharePlaceForm from './SharePlaceForm';
import friends from '../misc/mock-friends';
import CircularProgress from '@material-ui/core/CircularProgress';

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

const iconsToShare = [
  'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Messenger_colored_svg-512.png',
  'http://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png',
  'https://cdn4.iconfinder.com/data/icons/chat-messages-1/128/Chat_Messages_sms_mobile_phone-512.png'
];

export default function SimpleModal({ name }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmit] = React.useState(false);

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

  const handleSubmit = () => {
    window.open(
      `https://www.facebook.com/dialog/send?app_id=138566025676&link=${encodeURIComponent(
        'https://sniveri-app.com/place_id=138274993278'
      )}&redirect_uri=${encodeURIComponent('https://domain.com/')}`
    );
    setOpen(false)
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
        <div>
          <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">
              Share place {name} with your friends
            </h2>
            <p id="simple-modal-description">
              Choose people to go to this place with and share the fun!
            </p>

            {submitting ? (
              <div style={{ textAlign: 'center' }}>
                <CircularProgress style={{ marginTop: 30, marginBottom: 30 }} />
                <div style={{ textAlign: 'center' }}> Sharing...</div>
              </div>
            ) : (
              <React.Fragment>
                <SharePlaceForm friends={friends} />
                <div
                  style={{
                    margin: '30px 0 20px 10px',
                    width: 250,
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  {iconsToShare.map(iconSrc => (
                    <div
                      style={{ padding: 13 }}
                      className="share-place-icon"
                      onClick={handleSubmit}
                    >
                      <img
                        src={iconSrc}
                        alt="messenger"
                        style={{ width: 60 }}
                      ></img>
                    </div>
                  ))}
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
