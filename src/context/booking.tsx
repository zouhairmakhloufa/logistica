import React, { createContext, useState } from "react";

const BookingContext = createContext({
  ville: "",
  addres: "",
});

export const BookingProvider = ({
  children,
  ville,
  addres,
}: any): JSX.Element => {
  const initialState = {
    ville,
    addres,
  };

  const [state, setState] = useState(initialState);

  const setVille = (ville: string): void => setState({ ...state, ville });
  const setAddres = (addres: boolean): void => setState({ ...state, addres });

  const updatedInitialState: any = {
    ...state,
    setVille,
    setAddres,
  };

  return (
    <BookingContext.Provider value={updatedInitialState}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
