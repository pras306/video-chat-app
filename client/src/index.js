import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './containers/App';
import { ContextProvider } from './contexts/SocketsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
