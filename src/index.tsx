import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SeiWalletProvider } from '@sei-js/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SeiWalletProvider
        chainConfiguration={{
          chainId: 'atlantic-2',
          restUrl: 'https://rest.atlantic-2.seinetwork.io/',
          rpcUrl: 'https://rpc.atlantic-2.seinetwork.io/'
        }} wallets={['compass']}>
        <App />
      </SeiWalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
