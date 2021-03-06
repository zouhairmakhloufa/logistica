import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import dashbord from "./Modules/dashbord";
import SignupPhone from "./Modules/Auth/signup-phone";
import SignupInformation from "./Modules/Auth/Signup-information";
import SignupCode from "./Modules/Auth/signup-code";
import MapInformation from "./Modules/Auth/mapInformation";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" exact component={dashbord} />
        <Route path="/Auth/SignupPhone" exact component={SignupPhone} />
        <Route path="/Auth/SignupCode" exact component={SignupCode} />
        <Route path="/Auth/mapInformation" exact component={MapInformation} />
        <Route
          path="/Auth/SignupInformation"
          exact
          component={SignupInformation}
        />
      </div>
    </BrowserRouter>
  );
}
export default App;
