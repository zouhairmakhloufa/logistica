import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import dashbord from "./Modules/dashbord";
import SignupDriver from "./driver/components/SignupDriver";
import SignupUser from "./user/components/SignupUser";
import MapInformation from "./Modules/Auth/mapInformation";
import PoidsAndTaille from "./user/components/PoidsAndTaille";
import TypeOfCars from "./user/components/TypeOfCars";
import Service from "./user/components/Service";
import BookingSuccessful from "./user/components/BookingSuccessful";
import NoteToDriver from "./user/components/NoteToDriver";
import RetourRequest from "./user/components/RetourRequest";
import MenuUser from "./user/components/MenuUser";
import Info from "./user/components/Info";
import OrdersUser from "./user/components/OrdersUser";
import NotificationUser from "./user/components/NotificationUser";
import SettingUser from "./user/components/SettingUser";
import PaymentUser from "./user/components/PaymentUser";
import PaymentMethode from "./user/components/PaymentMethode";
import AddPaymentMethod from "./user/components/AddPaymentMethod";
import InfoDetailCurrent from "./user/components/InfoDetailCurrent";
import MenuDriver from "./driver/components/MenuDriver";
import HomeDriver from "./driver/components/HomeDriver";
import SettingDriver from "./driver/components/SettingDriver";
import Detaille from "./driver/components/Detaille";
import OrdersDriver from "./driver/components/OrdersDriver";
import Signin from "./Modules/Auth/Signin";
import SignUpUserOrDriver from "./Modules/Auth/SignUpUserOrDriver";

function Routers(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={dashbord} />
        <Route path="/MenuUser" exact component={MenuUser} />
        <Route path="/MenuDriver" exact component={MenuDriver} />
        <Route path="/OrdersDriver" exact component={OrdersDriver} />
        <Route path="/Info" exact component={Info} />
        <Route path="/InfoDetailCurrent" exact component={InfoDetailCurrent} />
        <Route path="/OrdersUser" exact component={OrdersUser} />
        <Route path="/PaymentUser" exact component={PaymentUser} />
        <Route path="/PaymentMethode" exact component={PaymentMethode} />
        <Route path="/AddPaymentMethod" exact component={AddPaymentMethod} />
        <Route path="/NotificationUser" exact component={NotificationUser} />
        <Route path="/SettingUser" exact component={SettingUser} />
        <Route path="/SettingDriver" exact component={SettingDriver} />
        <Route path="/Auth/Signin" exact component={Signin} />
        <Route path="/Auth/SignUpUserOrDriver"  exact  component={SignUpUserOrDriver} />
        <Route path="/Auth/SignupUser" exact component={SignupUser} />
        <Route path="/Auth/SignupDriver" exact component={SignupDriver} />
        <Route path="/mapInformation" exact component={MapInformation} />
        <Route path="/PoidsAndTaille" exact component={PoidsAndTaille} />
        <Route path="/TypeOfCars" exact component={TypeOfCars} />
        <Route path="/Service" exact component={Service} />
        <Route path="/BookingSuccessful" exact component={BookingSuccessful} />
        <Route path="/HomeDriver" exact component={HomeDriver} />
        <Route path="/Detaille" exact component={Detaille} />
        <Route path="/NoteToDriver" exact component={NoteToDriver} />
        <Route path="/RetourRequest" exact component={RetourRequest} />
      </div>
    </BrowserRouter>
  );
}
export default Routers;
