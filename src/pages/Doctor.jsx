import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
// import doctorData from "../data/Doctors.json";
import ScrollToTop from "../ScrollToTop";

const Doctor = () => {
  const {
    doctors,
    userData,
    loader,
    submitError,
    handleAppointmentChange,
    handleSubmitAppointment,
  } = useAppContext();

  const { name } = useParams();
  const eachDoctor = doctors?.filter(
    (item) => item?.doctors.first_name === name
  )[0];

  const [showBook, setShowBook] = useState(false);
  function toggleBookOn() {
    setShowBook(true);
  }

  return (
    <>
      <Header />
      {loader && <Loader />}
      <section className="w-full min-h-[700px] mt-[80px] py-4 md:py-10 text-slate-700 lg:px-[15%] px-5 font-light">
        <div className="w-fit mx-auto mb-10">
          <h1 className="font-bold text-[1.25rem] md:text-[1.75rem] text-center mb-1">
            Book an appointment
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#3b82f6] to-white/10"></div>
        </div>

        <h2 className="font-bold text-[1.1rem] md:text-[1.5rem] text-center md:text-start mb-4">
          Dr. {eachDoctor?.doctors.first_name} {eachDoctor?.doctors.last_name}{" "}
        </h2>

        <div className="w-full block md:flex items-start gap-8 ">
          <div className="mb-6 md:mb-0">
            <div className="w-full text-center md:text-start">
              <img
                alt=""
                src={`${
                  eachDoctor?.doctors.last_name === "Eze"
                    ? "/images/doc1.jpg"
                    : eachDoctor?.doctors.last_name === "Doe"
                    ? "/images/med1.jpg"
                    : eachDoctor?.doctors.last_name === "Ajani"
                    ? "/images/doc2.jpg"
                    : eachDoctor?.doctors.last_name === "Ada"
                    ? "/images/doc3.jpg"
                    : "/images/med2.jpg"
                }`}
                className="w-full md:w-[300px] h-[240px] mx-auto md:mx-0 object-cover hover:opacity-60 transition-all duration-300 rounded-lg"
              />
            </div>
          </div>
          {!showBook && (
            <div className="text-center">
              <p className="text-[1rem] md:text-[1.1rem] mb-4">
                Click the button below to schedule an appointment with Dr.{" "}
                {eachDoctor?.doctors.first_name} {eachDoctor?.doctors.last_name}
              </p>
              {!showBook && (
                <button
                  onClick={toggleBookOn}
                  className="py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#3b82f6] hover:bg-blue-300 text-white rounded-md"
                >
                  Book now
                </button>
              )}
            </div>
          )}
          {showBook && (
            <div className="w-full sm:w-[400px]">
              <form className="w-full">
                <label htmlFor="doctor" className="">
                  Doctor's name
                </label>{" "}
                <br />
                <div className="relative mb-4">
                  <input
                    id="doctor"
                    type="text"
                    value={`Dr. ${eachDoctor?.doctors.first_name} ${eachDoctor?.doctors.last_name}`}
                    onChange={handleAppointmentChange}
                    className="w-full bg-blue-400/10 py-1 px-3 rounded-md outline-none border border-blue-400/50"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-blue-400/20"></div>
                </div>
                <label htmlFor="doctor" className="">
                  Patient's name
                </label>{" "}
                <br />
                <div className="relative mb-4">
                  <input
                    id="patient"
                    type="text"
                    value={`${userData?.first_name} ${userData?.last_name}`}
                    onChange={handleAppointmentChange}
                    className="w-full bg-blue-400/10 py-1 px-3 rounded-md outline-none border border-blue-400/50"
                  />
                  <div className="w-full h-full absolute top-0 left-0 bg-blue-400/20"></div>
                </div>
                <label className="">
                  Set appointment date <span className="text-red-600">*</span>
                </label>{" "}
                <br />
                <div className="w-full flex gap-4 mt-2 mb-4">
                  <input
                    id="day"
                    type="number"
                    placeholder="12"
                    onChange={handleAppointmentChange}
                    className="w-1/3 h-fit bg-blue-400/10 py-1 px-3 rounded-md outline-none border border-blue-400/50"
                  />
                  <select
                    id="month"
                    defaultValue={"DEFAULT"}
                    onChange={handleAppointmentChange}
                    className="w-1/3 bg-blue-400/10 py-1 px-3 rounded-md cursor-pointer outline-none border border-blue-400/50"
                  >
                    <option value="DEFAULT" disabled hidden>
                      Month
                    </option>

                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="Novenber">Novenber</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    id="year"
                    type="number"
                    placeholder="2023"
                    onChange={handleAppointmentChange}
                    className="w-1/3 h-fit bg-blue-400/10 py-1 px-3 rounded-md outline-none border border-blue-400/50"
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
                  type="submit"
                  onClick={handleSubmitAppointment}
                  className="w-full md:w-[fit-content] px-10 py-2 bg-blue-400 hover:bg-blue-400/70 border border-blue-400 text-white rounded-md my-3"
                >
                  Book appointment
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Doctor;
