import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { getToken } from "./utils/tokenFunctions";
import { getUserDetails } from "./slices/userActions";
import reportWebVitals from "./reportWebVitals";

/* This is checking if the user has a token in local storage. If they do, it will dispatch the
getUserDetails action and update the display. 
This checking allows to keep the loggin active in case of reload of the page. 
*/
if (getToken()) {
  store.dispatch(getUserDetails());
}

const root = ReactDOM.createRoot(document.getElementById("root"));
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
