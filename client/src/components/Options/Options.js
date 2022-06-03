import React, { useContext, useState } from 'react';
import { Button, Grid, TextField, Typography, Paper, Container } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import './Options.css';
import { SocketContext } from '../../contexts/SocketsContext';

const Options = ({ children }) => {
  const { me, callAccepted, callEnded, name, setName, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container className='app__container'>
      <Paper elevation={10} className='app__container-paper'>
        <form className='app__container-form' autoComplete='off' noValidate>
          <Grid container className='app__container-grid'>
            <Grid item xs={12} md={6} className='app__padding'>
              <Typography gutterBottom variant='h6'>Account Info</Typography>
              <TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth ></TextField>
              <CopyToClipboard text={me} className='app__margin'>
                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large' />} >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className='app__padding'>
              <Typography gutterBottom variant='h6'>Make a Call</Typography>
              <TextField label='ID To Call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth ></TextField>
              { callAccepted && !callEnded ? (
                <Button variant='contained' color='secondary' fullWidth startIcon={<PhoneDisabled fontSize='large' />} onClick={leaveCall} className='app__margin' >
                  Hang Up
                </Button>
              ) : (
                <Button variant='contained' color='primary' fullWidth startIcon={<Phone fontSize='large' />} onClick={() => callUser(idToCall)} className='app__margin' >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;