import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" component={HomePage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
