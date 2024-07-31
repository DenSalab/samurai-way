import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className={"app-wrapper"}>
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className={"app-content-wrapper"}>
          <Switch>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/messages" component={Dialogs}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
