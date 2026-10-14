import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/boiler/Loader.jsx";
import Webpage from "./components/Webpage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Loader />
              <Webpage />
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
