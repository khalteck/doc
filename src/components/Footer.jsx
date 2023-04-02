import React from "react";
import whatsapp from "/images/icon-whatsapp.svg";
// import pinterest from "/images/icon-pinterest.svg";
// import insta from "/images/icon-instagram.svg";

import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

export default function Footer() {
  const { accessDashboard } = useAppContext();
  const styles = {
    marginLeft: 0,
  };
  return (
    <footer className="border-t botder-white/10">
      <div className="footer lg:px-[15%] px-5">
        <div className="logo--div flex">
          <h1 className="font-bold text-[2rem]">HealthoR </h1>
          <div className="logo--cont flex items-center space-x-3">
            {/* telephone */}
            <div className="cursor-pointer hover:translate-y-[6px] transition-all duration-300">
              <a
                href="hh"
                className="flex items-center justify-between space-x-2 "
              >
                <img
                  alt=""
                  src="/images/icon-phone.png"
                  className="w-[25px] h-[25px]"
                />
                <p>Telephone</p>
              </a>
            </div>
            {/* whatsapp */}
            <div className="cursor-pointer hover:translate-y-[6px] transition-all duration-300">
              <a
                href="hh"
                target="_blank"
                className="flex items-center justify-between space-x-2 "
              >
                <img alt="" src={whatsapp} className="w-[25px] h-[25px]" />
                <p>Whatsapp</p>
              </a>
            </div>
          </div>
        </div>
        <div className="copy--div">
          <ul>
            <li style={styles}>
              <Link to="/about">About</Link>
            </li>
            {/* <li onClick={accessDashboard}>Book rides</li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
          <p>Copyright © HealthoR 2023</p>
        </div>
      </div>
      <div className="mob--footer">
        <div className="logo--div">
          <h1 className="font-bold text-[2rem]">HealthoR</h1>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>

            {/* <li onClick={accessDashboard}>Book rides</li> */}

            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="copy--div">
          <div className="logo--cont flex space-x-4 justify-center mb-8">
            <a href="hh">
              <img
                alt=""
                src="/images/icon-phone.png"
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="hh" target="_blank">
              <img
                alt=""
                src={whatsapp}
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
          </div>
          <p> Copyright © HealthoR 2023</p>
        </div>
      </div>
    </footer>
  );
}
