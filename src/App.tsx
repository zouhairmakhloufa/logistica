import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import dashbord from "./Modules/dashbord";
import signupEmail from "./Modules/Auth/signupEmail";
import SignupVeifCode from "./Modules/Auth/SignupVeifCode";
import SignupDriver from "./driver/components/Signup";
import SignupUser from "./user/components/Signup";
import UserOrDriver from "./Modules/Auth/UserOrDriver";
import MapInformation from "./Modules/Auth/mapInformation";
import PoidsAndTaille from "./user/components/PoidsAndTaille";
import TypeOfCars from "./user/components/TypeOfCars";
import Service from "./user/components/Service";
import BookingSuccessful from "./user/components/BookingSuccessful";
import NoteToDriver from "./user/components/NoteToDriver";
import RetourRequest from "./user/components/RetourRequest";
import Menu from "./user/components/Menu";
import Orders from "./user/components/Orders";   
import Notification from "./user/components/Notification";
import Setting from "./user/components/Setting";
import PaymentUser from "./user/components/PaymentUser";
import PaymentMethode from "./user/components/PaymentMethode";
import AddPaymentMethod from "./user/components/AddPaymentMethod";

function App(): JSX.Element {
  return (
    <BrowserRouter>  
      <div className="app">
        <Route path="/" exact component={dashbord} />
        <Route path="/Menu" exact component={Menu} /> 
        <Route path="/Orders" exact component={Orders} /> 
        <Route path="/PaymentUser" exact component={PaymentUser} /> 
        <Route path="/PaymentMethode" exact component={PaymentMethode} />  
        <Route path="/AddPaymentMethod" exact component={AddPaymentMethod} />           
        <Route path="/Notification" exact component={Notification} /> 
        <Route path="/Setting" exact component={Setting} /> 
        <Route path="/Auth/signupEmail" exact component={signupEmail} />
        <Route path="/Auth/SignupVeifCode" exact component={SignupVeifCode} />
        <Route path="/Auth/UserOrDriver" exact component={UserOrDriver} />
        <Route path="/Auth/SignupUser" exact  component={SignupUser} />
        <Route path="/Auth/SignupDriver" exact  component={SignupDriver} />
        <Route path="/mapInformation" exact component={MapInformation} />
        <Route path="/PoidsAndTaille" exact component={PoidsAndTaille} />    
        <Route path="/TypeOfCars" exact component={TypeOfCars} />   
        <Route path="/Service" exact component={Service} /> 
        <Route path="/BookingSuccessful" exact component={BookingSuccessful} />       
        <Route path="/NoteToDriver" exact component={NoteToDriver} /> 
        <Route path="/RetourRequest" exact component={RetourRequest} /> 
      </div>
    </BrowserRouter>
  );
}
export default App;
