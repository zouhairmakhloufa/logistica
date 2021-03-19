import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import dashbord from "./Modules/dashbord";
import SignupPhone from "./Modules/Auth/signup-phone";
import SignupCode from "./Modules/Auth/signup-code";
import SignupDriver from "./driver/components/Signup";
import SignupUser from "./user/components/Signup";
import UserOrDriver from "./Modules/Auth/UserOrDriver";
import MapInformation from "./Modules/Auth/mapInformation";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={dashbord} />
        <Route path="/Auth/SignupPhone" exact component={SignupPhone} />
        <Route path="/Auth/SignupCode" exact component={SignupCode} />
        <Route path="/Auth/UserOrDriver" exact component={UserOrDriver} />
        <Route path="/Auth/SignupUser" exact  component={SignupUser} />
        <Route path="/Auth/SignupDriver" exact  component={SignupDriver} />
        <Route path="/Auth/mapInformation" exact component={MapInformation} />
        


      </div>
    </BrowserRouter>
  );
}
export default App;
