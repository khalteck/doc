import { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Patients = () => {
  const {
    loader,
    userData,
    submitError,
    handledocumentsDataChange,
    handleFileChange,
    patientsList,
  } = useAppContext();

  return (
    <>
      <Header />
      {loader && <Loader />}
      <section className="w-full min-h-[700px] mt-[80px] py-4 md:py-10 text-slate-700 lg:px-[15%] px-5 font-light text-center">
        <div className="w-fit mx-auto">
          <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
            Patients
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
        </div>
        <p className="mt-5 text-center">
          Welcome Dr {userData?.first_name} {userData?.last_name}! You can view
          all registered patients here.
        </p>

        <div
          className={`w-full md:w-[600px] min-h-[400] bg-blue-300/10 my-8 mx-auto p-3 md:p-5 rounded-lg flex justify-center`}
        >
          {patientsList.length > 0 ? (
            <table className="w-full border border-gray-500/30">
              <thead>
                <tr>
                  <th className="border border-gray-500/30">S/N</th>
                  <th className="border border-gray-500/30">First name</th>
                  <th className="border border-gray-500/30">Last Name</th>
                  <th className="border border-gray-500/30">Medical cases</th>
                </tr>
              </thead>
              <tbody>
                {patientsList?.map((item, index) => {
                  return (
                    <tr key={index} className="border border-gray-500/30">
                      <td className="py-3 border border-gray-500/30">1</td>
                      <td className="border border-gray-500/30">
                        {item?.first_name}
                      </td>
                      <td className="border border-gray-500/30">
                        {item?.last_name}
                      </td>
                      <td className="border border-gray-500/30">
                        {item?.medical_cases}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-center">
              <img
                alt=""
                src="/images/empty.png"
                className="w-24 h-24 mx-auto"
              />
              <p className="mt-3 text-slate-400 text-[1.2rem]">
                No appointments yet...
              </p>
            </div>
          )}
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Patients;
