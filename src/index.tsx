import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BookingProvider } from "./context/booking";

ReactDOM.render(
  <React.StrictMode>
    <BookingProvider
      governorateAddressSource=""
      addresSource=""
      governorateAddressDestination=""
      addressDestination=""
      poids="0"
      hauteur="0"
      largeur="0"
      profondeur="0"
      TypeOfCars=""
      service=""
      packaging=""
      PaymentMethode=""
      noteToDriver=""
    >
      <App />
    </BookingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
