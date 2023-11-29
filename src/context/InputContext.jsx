import { createContext, useContext, useState } from "react";

const inputContext = createContext();

const GlobalInputContextProvider = ({ children }) => {
  const [input, setInput] = useState({ title: "", description: "", due: "" });
  const [editModeId, setEditModeId] = useState(null);

  return (
    <inputContext.Provider
      value={{ input, setInput, editModeId, setEditModeId }}
    >
      {children}
    </inputContext.Provider>
  );
};

export const useInputContext = () => useContext(inputContext);
export default GlobalInputContextProvider;
