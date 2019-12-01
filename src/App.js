import React from 'react';
import './App.css';
import './index.css';
import './styles/styles.scss';
import AppContainer from './containers/AppContainer.js';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </div>
  )
}

export default App;
