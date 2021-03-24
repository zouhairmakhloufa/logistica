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

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={dashbord} />
        <Route path="/Auth/signupEmail" exact component={signupEmail} />
        <Route path="/Auth/SignupVeifCode" exact component={SignupVeifCode} />
        <Route path="/Auth/UserOrDriver" exact component={UserOrDriver} />
        <Route path="/Auth/SignupUser" exact  component={SignupUser} />
        <Route path="/Auth/SignupDriver" exact  component={SignupDriver} />
        <Route path="/Auth/mapInformation" exact component={MapInformation} />
        <Route path="/Auth/PoidsAndTaille" exact component={PoidsAndTaille} />    
        <Route path="/Auth/TypeOfCars" exact component={TypeOfCars} />   
        <Route path="/Auth/Service" exact component={Service} />       
      </div>
    </BrowserRouter>
  );
}
export default App;
