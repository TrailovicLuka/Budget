import React from "react";
import "./App.css";
import Head from "./components/Head";
import Forma from "./components/Form";
import Tables from "./components/Tables";
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Head />
        <Forma />
        <Tables />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
