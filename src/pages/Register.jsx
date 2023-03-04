import Header from "../components/Header";
import { Link } from "react-router-dom";
// import eye from "../images/icons8-eye-30.png";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
// import Loader from "../components/Loader";

const Register = ({}) => {
  const [docOpen, setDocOpen] = useState(false);
  function togglePatient() {
    setDocOpen(false);
  }
  function toggleDoc() {
    setDocOpen(true);
  }
  return (
    <>
      {/* {showLoader && <Loader />} */}
      <Header />
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
                id="fname"
                //   onChange={handleRegChange}
                placeholder="Patient's First name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="text"
                id="lname"
                //   onChange={handleRegChange}
                placeholder="Patient's Last name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="email"
                id="email"
                //   onChange={handleRegChange}
                placeholder="Patient's email"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <div className="w-full relative">
                <input
                  // type={showPassword ? "text" : "password"}
                  id="password"
                  // onChange={handleRegChange}
                  placeholder="password"
                  className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
                />
                <img
                  alt="reveal"
                  // src={eye}
                  className="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                  // onClick={togglePassword}
                />
              </div>
              <button
                //   onClick={register}
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
                id="fname"
                //   onChange={handleRegChange}
                placeholder="Doctor's First name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="text"
                id="lname"
                //   onChange={handleRegChange}
                placeholder="Doctor's Last name"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <input
                type="email"
                id="email"
                //   onChange={handleRegChange}
                placeholder="Doctor's email"
                className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
              />
              <div className="w-full relative">
                <input
                  // type={showPassword ? "text" : "password"}
                  id="password"
                  // onChange={handleRegChange}
                  placeholder="password"
                  className="w-full bg-[#3b82f6]/20 my-4 p-3 outline-none rounded-lg"
                />
                <img
                  alt="reveal"
                  // src={eye}
                  className="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                  // onClick={togglePassword}
                />
              </div>
              <button
                //   onClick={register}
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
