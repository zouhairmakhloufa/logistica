import "./App.css";
import React from 'react' ;
import { BrowserRouter , Route, Router } from "react-router-dom";
import Acceuil from "./Shared/Auth/Acceuil"
import SignupPhone from "./Shared/Auth/SignupPhone";
import Home from "./Shared/Auth/Home";
import Login from "./Shared/Auth/Login";
import Contact from "./Shared/Auth/Contact";

function App() :JSX.Element {
  
  
  return (
   <BrowserRouter>
   
   <div className="app" >
    
    <Acceuil />
    <Route path="/" exact component={Home} />
    <Route path="/SignupPhone"  component={SignupPhone} />
    <Route path="/login" exact component={Login} />
    <Route path="/Contact" exact component={Contact} />

   </div>

   </BrowserRouter>
  );
}

export default App;
