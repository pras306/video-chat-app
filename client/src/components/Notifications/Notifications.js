import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import './Notifications.css';
import { SocketContext } from '../../contexts/SocketsContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
    { call.isReceivedCall && !callAccepted && (
      <div  className='app__notifications'>
        <h1>{call.name} is calling: </h1>
        <Button variant='contained' color='primary' onClick={answerCall}>
          Answer
        </Button>
      </div>
    )}
    </>
  );
};

export default Notifications;