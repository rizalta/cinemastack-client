import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import store from "./store";

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { authActions } from "./features/AuthSlice.js";

const localAuth = localStorage.getItem("auth");

if (localAuth) {
  const auth = JSON.parse(localAuth);
  store.dispatch(authActions.login(auth));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
