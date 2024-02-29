import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/reservation" component={ReservationPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
