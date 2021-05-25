import { createContext, useState } from "react";

const BookingContext = createContext({
  governorateAddressSource: "",
  addresSource: "",
  governorateAddressDestination: "",
  addressDestination: "",
  poids: "",
  hauteur: "",
  largeur: "",
  profondeur: "",
  typeOfCars: "",
  service: "",
  packaging: "",
  paymentMethode: "",
  noteToDriver: "",
  carName: "",
  distance: "",
  priceService: "",
  pricePackaging: "",
  total: "",
});

export const BookingProvider = ({ children }: any): JSX.Element => {
  const initialState = {
    governorateAddressSource: "",
    addresSource: "",
    governorateAddressDestination: "",
    addressDestination: "",
    poids: "",
    hauteur: "",
    largeur: "",
    profondeur: "",
    typeOfCars: "",
    service: "",
    packaging: "",
    paymentMethode: "",
    noteToDriver: "",
    driverId: "",
  };

  const [state, setState] = useState({});

  const setGovernorateAddressSource = (
    governorateAddressSource: string
  ): void => setState({ ...state, governorateAddressSource });
  const setAddresSource = (addresSource: string): void =>
    setState({ ...state, addresSource });
  const setGovernorateAddressDestination = (
    governorateAddressDestination: string
  ): void => setState({ ...state, governorateAddressDestination });
  const setAddressDestination = (addressDestination: string): void =>
    setState({ ...state, addressDestination });
  const setPoids = (poids: string): void => setState({ ...state, poids });
  const setHauteur = (hauteur: string): void => setState({ ...state, hauteur });
  const setLargeur = (largeur: string): void => setState({ ...state, largeur });
  const setProfondeur = (profondeur: string): void =>
    setState({ ...state, profondeur });
  const setNoteToDriver = (noteToDriver: string): void =>
    setState({ ...state, noteToDriver });
  const setService = (service: string): void => setState({ ...state, service });
  const setPackaging = (packaging: string): void =>
    setState({ ...state, packaging });
  const setPaymentMethode = (paymentMethode: string): void =>
    setState({ ...state, paymentMethode });
  const setTypeOfCar = (typeOfCars: string): void => {
    setState((prevState) => ({
      ...prevState,
      typeOfCars,
    }));
  };

  const setCarName = (carName: string): void => {
    setState((state) => ({ ...state, carName }));
  };

  const setDistance = (distance: string): void => {
    setState((state) => ({ ...state, distance }));
  };

  const setTotal = (total: string): void => {
    setState((state) => ({ ...state, total }));
  };

  const setPriceService = (priceService: string): void => {
    setState((state) => ({ ...state, priceService }));
  };

  const setPricePackaging = (pricePackaging: string): void => {
    setState((state) => ({ ...state, pricePackaging }));
  };

  const setDriverId = (driverId: string): void =>
    setState((state) => ({ ...state, driverId }));

  console.log("state", state);
  const updatedInitialState: any = {
    ...state,
    setGovernorateAddressSource,
    setAddresSource,
    setGovernorateAddressDestination,
    setAddressDestination,
    setPoids,
    setHauteur,
    setLargeur,
    setProfondeur,
    setService,
    setPackaging,
    setNoteToDriver,
    setPaymentMethode,
    setTypeOfCar,
    setDriverId,
    setCarName,
    setDistance,
    setTotal,
    setPriceService,
    setPricePackaging,

  };

  return (
    <BookingContext.Provider value={updatedInitialState}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
