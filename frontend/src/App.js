import React from "react";

import { About, Header, Featured, Footer, Projects, Skills } from "./container";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <About />
      <Header />
      <Featured />
      <Footer />
      <Projects />
      <Skills />
    </div>
  );
};

export default App;
