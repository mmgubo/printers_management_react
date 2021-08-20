import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  printers: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removePrinter = (id) => {
    dispatch({
      type: "REMOVE_PRINTER",
      payload: id,
    });
  };

  const addPrinter = (printer) => {
    dispatch({
      type: "ADD_PRINTER",
      payload: printer,
    });
  };

  const editPrinter = (printer) => {
    dispatch({
      type: "EDIT_PRINTER",
      payload: printer,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        printers: state.printers,
        removePrinter,
        addPrinter,
        editPrinter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
