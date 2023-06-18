import { createContext, useContext, useReducer, useState } from "react";
import { habitReducer, initialState } from "../reducer/useReducer";

export const habitContext = createContext();

const habitformvalue = {
  id: "",
  name: "",
  repeat: "",
  goal: "",
  Times: "",
  startDate: "",
  endDate: "",
};

export const ContextProvider = ({ children }) => {
  const [state, habitDispatch] = useReducer(habitReducer, initialState);
  const [habitForm, setHabitForm] = useState(habitformvalue);
  return (
    <habitContext.Provider value={{ state, habitDispatch , habitForm, setHabitForm, habitformvalue }}>
      {children}
    </habitContext.Provider>
  );
};
