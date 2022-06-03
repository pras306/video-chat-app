import React from 'react';

import './App.css';
import { Notifications, Options, VideoPlayer } from '../components';

const App = () => {
  return (
    <div className='app'>
      <div className='app__header'>
        <h1>Video Chat</h1>
      </div>
      <div className='app__content'>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </div>
  )
}

export default App;
