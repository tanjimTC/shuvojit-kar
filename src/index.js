import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollProgressRead from "react-scroll-progress-read";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
     <div style={{position:'fixed' , zIndex:'1'}}>
        <ScrollProgressRead 
          barColor="linear-gradient(124deg, rgba(80,238,88,1) 10%, rgba(102,224,107,1) 37%, rgba(48,214,56,1) 79%, rgba(106,240,113,1) 95%)" 
        />
        </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
