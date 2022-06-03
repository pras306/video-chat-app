import React, { useContext, useEffect, useRef } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';

import './VideoPlayer.css';
import { SocketContext } from '../../contexts/SocketsContext';

const VideoPlayer = () => {
  const { name, userVideoRef, callAccepted, callEnded, stream, call } = useContext(SocketContext);
  const videoRef = useRef();

  useEffect(() => {
    if(stream) videoRef.current.srcObject = stream;
  }, [stream]);

  return (
    <Grid className='app__video-player'>
      { stream && (
        <Paper className='app__video-player-paper'>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={videoRef} autoPlay />
          </Grid>
        </Paper>
      )}
      {
        callAccepted && !callEnded && (
          <Paper className='app__video-player-paper'>
            <Grid item xs={12} md={6}>
              <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline muted ref={userVideoRef} autoPlay />
            </Grid>
          </Paper>
        )
      }
    </Grid>
  );
};

export default VideoPlayer;