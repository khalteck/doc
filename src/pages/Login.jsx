import Header from "../components/Header";
import { Link } from "react-router-dom";
import eye from "/images/icons8-eye-30.png";
import ScrollToTop from "../ScrollToTop";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import { useState } from "react";

const Login = ({}) => {
  const { loader, handleLoginChange, handleLogin, submitError, loginSuccess } =
    useAppContext();

  const [showPassword, setshowPassword] = useState(false);
  function togglePassword() {
    setshowPassword((prev) => !prev);
  }
  return (
    <>
      {loader && <Loader />}
      <Header />
      {loginSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-16 h-16"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Login Successful!
            </h3>
            <div className="border-2 border-blue-500 py-2 px-6 rounded-md text-black">
              Redirecting...
            </div>
          </div>
        </div>
      )}
      <div className="w-full min-h-[85vh] px-4 my-16 text-slate-700 flex items-center justify-center relative">
        <div className="w-full sm:w-[550px] bg-[#eff6ff] p-5 sm:p-10 rounded-md border border-[#3b82f6]">
          <h1 className="font-bold text-[1.75rem] text-center">Login</h1>
          <form>
            <input
              type="email"
              id="email"
              onChange={handleLoginChange}
              placeholder="Email"
              className="w-full bg-blue-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleLoginChange}
                placeholder="Password"
                className="w-full bg-blue-400/20 my-4 p-3 outline-none rounded-lg"
              />
              <img
                alt="reveal"
                src={eye}
                className="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                onClick={togglePassword}
              />
            </div>
            {submitError && (
              <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
                <img
                  alt=""
                  src="/images/icons8-medium-risk-50.png"
                  className="w-6 h-6 mr-1"
                />
                <p>{submitError}</p>
              </div>
            )}
            <button
              onClick={handleLogin}
              className="w-full bg-blue-400 my-4 p-3 outline-none rounded-lg text-white"
            >
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-400">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Login;
