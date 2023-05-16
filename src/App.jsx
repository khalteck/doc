import { Routes, Route } from "react-router-dom";
import "./output.css";
import Homepage from "./pages/Homepage";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import { useAppContext } from "./contexts/AppContext";

const About = lazy(() => import("./pages/About"));
const Doctor = lazy(() => import("./pages/Doctor"));
const Appointments = lazy(() => import("./pages/Appointments"));
const Documents = lazy(() => import("./pages/Documents"));
const Patients = lazy(() => import("./pages/Patients"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { userData } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointments"
          element={userData?.token ? <Appointments /> : <Login />}
        />
        <Route
          path="/documents"
          element={userData?.is_patient ? <Documents /> : <Homepage />}
        />
        <Route
          path="/patients"
          element={userData?.is_medic ? <Patients /> : <Homepage />}
        />
        <Route
          path="/doctor/:name"
          element={userData?.token ? <Doctor /> : <Login />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* page not found */}
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
