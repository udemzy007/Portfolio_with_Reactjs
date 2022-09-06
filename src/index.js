import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import Header from './components/header/Header';
import './components/header/header.css';
import Home from './components/home/Home';
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <Header />
    <Home /> */}
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

