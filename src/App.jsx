import { Routes, Route } from "react-router-dom";
import "./output.css";
import Homepage from "./pages/Homepage";
// import { useAppContext } from "./contexts/AppContext";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Doctor from "./pages/Doctor";

const About = lazy(() => import("./pages/About"));
const Doctor = lazy(() => import("./pages/Doctor"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  // const { user, admin, activeRidesFromDb } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor/:name" element={<Doctor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
