import { createContext, useState } from "react";

const BookingContext = createContext({
  governorateAddressSource: "",
  addresSource: "",
  governorateAddressDestination: "",
  addressDestination: "",
  poids:"",
  hauteur:"",
  largeur:"",
  profondeur:"",
  TypeOfCars:"",
  service: "",
  packaging: "",
  paymentMethode:"",
  noteToDriver:"",
});

export const BookingProvider = ({
  children,
  governorateAddressSource,
  addresSource,
  governorateAddressDestination,
  addressDestination,
  poids,
  hauteur,
  largeur,
  profondeur,
  TypeOfCars,
  service,
  packaging,
  paymentMethode,
  noteToDriver
}: any): JSX.Element => {

  const initialState = {
    governorateAddressSource,
    addresSource,
    governorateAddressDestination,
    addressDestination,
    poids,
    hauteur,
    largeur,
    profondeur,
    service,
    packaging,
    paymentMethode,
    noteToDriver,

  };

  const [state, setState] = useState(initialState);

  const setGovernorateAddressSource = (governorateAddressSource: string): void => setState({ ...state, governorateAddressSource });
  const setAddresSource = (addresSource: String): void => setState({ ...state, addresSource });
  const setGovernorateAddressDestination= (governorateAddressDestination: String): void => setState({ ...state, governorateAddressDestination });
  const setAddressDestination = (addressDestination: String): void => setState({ ...state, addressDestination });
  const setPoids = (poids: Number): void => setState({ ...state, poids });
  const setHauteur = (hauteur: Number): void => setState({ ...state, hauteur });
  const setLargeur = (largeur: Number): void => setState({ ...state, largeur });
  const setProfondeur = (profondeur: Number): void => setState({ ...state, profondeur });
  const setNoteToDriver = (noteToDriver: String): void => setState({ ...state, noteToDriver });
  const setService = (service: String): void => setState({ ...state, service });
  const setPackaging = (packaging: String): void => setState({ ...state, packaging });
  const setPaymentMethode = (paymentMethode: boolean): void => setState({ ...state, paymentMethode });

  const updatedInitialState: any = { ...state,
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
    setPaymentMethode
  };

  return (
    <BookingContext.Provider value={updatedInitialState}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
