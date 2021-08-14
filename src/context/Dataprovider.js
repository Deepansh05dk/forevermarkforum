import React, { useReducer, createContext } from "react";
export const Statecontext = createContext();
export const Dataprovider = ({ children, reducer, initialState }) => {
  return (
    <Statecontext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Statecontext.Provider>
  );
};
export const initialState = {
  user: null,
  alert: {
    diplay: "false",
    msg: "",
  },
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD USER":
      return {
        ...state,
        user: action.item,
      };
    case "DISPLAY ALERT":
      return {
        ...state,
        alert: action.item,
      };
    default:
      break;
  }
};
