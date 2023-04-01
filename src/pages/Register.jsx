import Header from "../components/Header";
import { Link } from "react-router-dom";
import eye from "/images/icons8-eye-30.png";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import Loader from "../components/Loader";

const Register = ({}) => {
  const {
    handleRegChange,
    submitError,
    handleRegSubmit,
    loader,
    registerSuccess,
    proceedToLogin,
    handleRegDocChange,
    handleRegDocSubmit,
  } = useAppContext();

  const [docOpen, setDocOpen] = useState(false);
  function togglePatient() {
    setDocOpen(false);
  }
  function toggleDoc() {
    setDocOpen(true);
  }

  const [showPassword, setshowPassword] = useState(false);
  function togglePassword() {
    setshowPassword((prev) => !prev);
  }

  return (
    <>
      {loader && <Loader />}
      <Header />
      {registerSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-16 h-16"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              You have successfully {registerSuccess}!
            </h3>
            <button
              onClick={proceedToLogin}
              className="py-2 px-4 bg-blue-500 hover:bg-blue-300 rounded-md text-white"
            >
              Proceed to login
            </button>
          </div>
        </div>
      )}
      <div className="w-full min-h-[85vh] px-4 my-16 text-slate-700 flex flex-col items-center justify-center relative">
        {/* <Link to="/" className="absolute top-10 left-2 block sm:hidden">
          <button className="bg-[#3b82f6]/80 font-bold text-[0.90rem] mb-8 px-5 py-1 rounded-md hover:bg-[#3b82f6] hover:translate-y-[6px] transition-all duration-300">
            Back to home
          </button>
        </Link> */}
        <h1 className="font-bold text-[1.25rem] sm:text-[1.75rem] text-center mb-8">
          Register as:
        </h1>
        <div className="flex relative bottom-[-2px]">
          <div
            onClick={togglePatient}
            className={` ${
              docOpen
                ? "bg-[#eff6ff] border-t-white border-x-white text-slate-400 top-[-2px]"
                : "bg-[#eff6ff] border-t-blue-400 border-x-blue-400"
            }  px-8 py-2 sm:py-3 text-[1rem] sm:text-[1.1rem] cursor-pointer rounded-t-md font-bold border relative`}
          >
            A Patient
          </div>
          <div
            onClick={toggleDoc}
            className={`  ${
              !docOpen
                ? "bg-[#eff6ff] border-t-white border-x-white text-slate-400 top-[-2px]"
                : "bg-[#eff6ff] border-t-blue-400 border-x-blue-400"
            }  px-8 py-2 sm:py-3 text-[1rem] sm:text-[1.1rem] cursor-pointer rounded-t-md font-bold border relative`}
          >
            A Doctor
          </div>
        </div>
        <div className="w-full sm:w-[550px] bg-[#eff6ff] p-5 sm:p-10 rounded-md border border-[#3b82f6]">
          {!docOpen && (
            <form>
              <input
                type="text"
                id="first_name"
                onChange={handleRegChange}
                placeholder="Patient's First name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="text"
                id="last_name"
                onChange={handleRegChange}
                placeholder="Patient's Last name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="email"
                id="email"
                onChange={handleRegChange}
                placeholder="Patient's email"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={handleRegChange}
                  placeholder="password"
                  className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
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
                onClick={handleRegSubmit}
                className="w-full bg-[#3b82f6] my-4 p-3 outline-none rounded-lg text-white"
              >
                Register as a Patient
              </button>
              <p>
                Have an account already?{" "}
                <Link to="/login" className="text-[#3b82f6]">
                  Login
                </Link>
              </p>
            </form>
          )}

          {docOpen && (
            <form>
              <input
                type="text"
                id="first_name"
                onChange={handleRegDocChange}
                placeholder="Doctor's First name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="text"
                id="last_name"
                onChange={handleRegDocChange}
                placeholder="Doctor's Last name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="email"
                id="email"
                onChange={handleRegDocChange}
                placeholder="Doctor's email"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <div className="w-full relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={handleRegDocChange}
                  placeholder="password"
                  className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
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
                onClick={handleRegDocSubmit}
                className="w-full bg-[#3b82f6] my-4 p-3 outline-none rounded-lg text-white"
              >
                Register as a Doctor
              </button>
              <p>
                Have an account already?{" "}
                <Link to="/login" className="text-[#3b82f6]">
                  Login
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Register;
