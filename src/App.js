import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import AddServices from './components/AddServices/AddServices';
import Services from './components/Services/Services';
import Register from './components/Register/Register';
import Details from './components/Details/Details';
import Contact from './components/Contact/Contact';
import MyBookings from './components/MyBookings/MyBookings';
import Dashboard from './components/Dashboard/Dashboard';
import MangeOrder from './components/MangeOrder/MangeOrder';
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route exact path="/myOrder">
            <MyBookings></MyBookings>
          </Route>
          <Route path="/services/:serviceId">
            <Details></Details>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route exact path="/addService">
            <AddServices></AddServices>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;