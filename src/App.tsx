import React from 'react';
import { HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import RouterView from './router';

function App() {
  return (
    <>
      <HashRouter>
        <RouterView></RouterView>
      </HashRouter>
    </>
  );
}

export default App;
