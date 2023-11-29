import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import GlobalInputContextProvider from "./context/InputContext";
import GlobalplaySoundProvider from "./context/playSound";
import GlobalAlertProvider from "./context/alertContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalAlertProvider>
      <GlobalplaySoundProvider>
        <GlobalInputContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </GlobalInputContextProvider>
      </GlobalplaySoundProvider>
    </GlobalAlertProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
