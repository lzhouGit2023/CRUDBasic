import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import  {ProductProvider as Context} from './Context';
import { ProductProvider} from './Context';
//import * as serviceWorker from './service';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

ReactDOM.render(
  <ProductProvider>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
