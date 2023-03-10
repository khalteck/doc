import Header from "../components/Header";
import { Link } from "react-router-dom";
// import eye from "../images/icons8-eye-30.png";
import ScrollToTop from "../ScrollToTop";
// import Loader from "../components/Loader";

const Login = ({}) => {
  return (
    <>
      {/* {showLoader && <Loader />} */}
      <Header />
      <div className="w-full min-h-[85vh] px-4 my-16 text-slate-700 flex items-center justify-center relative">
        <div className="w-full sm:w-[550px] bg-[#eff6ff] p-5 sm:p-10 rounded-md border border-[#3b82f6]">
          <h1 className="font-bold text-[1.75rem] text-center">Login</h1>
          <form>
            <input
              type="email"
              id="email"
              //   onChange={handleLoginChange}
              placeholder="Email"
              className="w-full bg-blue-400/20 my-4 p-3 outline-none rounded-lg"
            />
            <div className="w-full relative">
              <input
                // type={showPassword ? "text" : "password"}
                id="password"
                // onChange={handleLoginChange}
                placeholder="Password"
                className="w-full bg-blue-400/20 my-4 p-3 outline-none rounded-lg"
              />
              <img
                alt="reveal"
                // src={eye}
                className="w-5 h-5 absolute top-1/2 right-3 translate-y-[-50%] cursor-pointer"
                // onClick={togglePassword}
              />
            </div>
            <button
              //   onClick={login}
              className="w-full bg-blue-400 my-4 p-3 outline-none rounded-lg"
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
