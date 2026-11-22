import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/boiler/Loader.jsx";

// Lazy-load the main page so the initial JS bundle stays small
const Webpage = lazy(() => import("./components/Webpage.jsx"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Loader /> */}
              <Suspense fallback={null}>
                <Webpage />
              </Suspense>
            </>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
