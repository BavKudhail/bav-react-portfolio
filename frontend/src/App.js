import React from "react";

import { About, Header, Featured, Footer, Projects, Skills } from "./container";
import { Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Featured />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
