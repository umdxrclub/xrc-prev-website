import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createRoot, hydrateRoot } from 'react-dom/client';

/*
createRoot(
  document.getElementById("root"),
)
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/

import { hydrate, render } from "react-dom";
 
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    document.getElementById("root"),
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  createRoot(
    document.getElementById("root"),
  )
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
