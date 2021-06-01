import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './pages/ProfilePage.css';
import App from './App';
import SellersProvider from "../src/sellerContext/sellersContextProvider.js"

ReactDOM.render(
  <React.StrictMode>
    <SellersProvider>
      <App />
    </SellersProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
