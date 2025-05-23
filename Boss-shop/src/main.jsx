import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import  {store } from './redux/Store.jsx'
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
