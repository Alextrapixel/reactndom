import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rnState = {
  menu: 0,
  minval: 0,
  maxval: 0,
  cardtitle: ''
}

function reducer(state = rnState, action) {
  switch (action.type) {
    case "SELECT_MENU":
      return { ...state, menu: action.menu };
    case "SET_MIN":
      return { ...state, minval: action.num };
    case "SET_MAX":
      return { ...state, maxval: action.num };
    case "SET_TITLE":
      return { ...state, cardtitle: action.title };
    case "RESET_RANGE":
      return { minval: '', maxval: '', cardtitle: '' };
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
