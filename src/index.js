import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const context = {
  shown: false,
  clicked: false,
};

export const AppContext = createContext(context)

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
