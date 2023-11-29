import React, { createContext, useState, useContext } from "react";

const alertContext = createContext();
const GlobalAlertProvider = (props) => {
  // alert messages
  const [alert, setAlert] = useState(null);
  let timer;
  const showAlert = (type, message) => {
    clearTimeout(timer);
    setAlert({
      type,
      message,
    });
    timer = setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <alertContext.Provider value={{ alert, showAlert }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default GlobalAlertProvider;
export const useAlert = () => useContext(alertContext);
