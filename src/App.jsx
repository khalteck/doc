import { Routes, Route } from "react-router-dom";
import "./output.css";
import Homepage from "./pages/Homepage";
// import { useAppContext } from "./contexts/AppContext";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

// const About = lazy(() => import("./pages/About"));

function App() {
  // const { user, admin, activeRidesFromDb } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} /> */}

        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
