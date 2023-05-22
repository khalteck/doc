// import Footer from "../components/Footer";
import Header from "../components/Header";
import DoctorsCard from "../components/DoctorsCard";
import Slideshow from "../components/Slideshow";
import doctorsData from "../data/Doctors.json";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";
import { useAppContext } from "../contexts/AppContext";
import Loader from "../components/Loader";
import DoctorsCardOffline from "../components/DoctorsCardOffline";
import { useState } from "react";
import ReactPaginate from "react-paginate";

const Homepage = () => {
  const {
    doctors,
    medicalDataStatus,
    submitError,
    handleMedicalDataChange,
    handleRaceChange,
    selectedRace,
    handleSubmitMedicalData,
    loader,
    userData,
    medicalDataSubmitSuccess,
    isDoctor,
    navigate,
    setIsDoctor,
  } = useAppContext();

  const [videoCall, setVideoCall] = useState(false);
  function toggleVideoCall() {
    setVideoCall((prev) => !prev);
    console.log("clicked");
    console.log(videoCall);
  }

  //to handle registrations table pagination
  // eslint-disable-next-line no-unused-vars
  const [doctorsPag, setdoctorsPag] = useState(doctors);
  const [pageNumber, setPageNumber] = useState(0);

  const docPerPage = 6;
  const pagesVisited = pageNumber * docPerPage;

  const displayDocs = doctorsPag
    ?.slice(pagesVisited, pagesVisited + docPerPage)
    ?.map((item, index) => {
      return <DoctorsCard key={index} item={item} />;
    });

  const pageCount = Math.ceil(doctorsPag?.length / docPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // console.log(doctors);
  return (
    <>
      <Header />
      {loader && <Loader />}
      {medicalDataSubmitSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-16 h-16"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Medical data submitted Successfully!
            </h3>
          </div>
        </div>
      )}
      <div
        onClick={toggleVideoCall}
        className="w-fit h-fit md:h-[120px] bg-blue-500 shadow-lg fixed bottom-5 right-5 text-black p-3 md:p-4 rounded-full flex justify-center items-center cursor-pointer hover:opacity-[.7] z-30"
      >
        <div>
          <p className="uppercase font-bold text-[.75rem] md:text-[1rem]">
            Video Call
          </p>
          <img
            src="/images/video.png"
            className="w-7 h-7 md:w-10 md:h-10 mx-auto"
            alt=""
          />
        </div>
      </div>
      {videoCall && (
        <div className="w-full h-screen bg-white fixed top-0 left-0 z-40">
          <div
            onClick={toggleVideoCall}
            className="bg-blue-500 py-2 px-4 rounded-lg absolute top-3 right-3 cursor-pointer font-bold text-white"
          >
            Close
          </div>
          <h1 className="text-[1.25rem] text-center text-black font-bold uppercase mt-4">
            Video call
          </h1>
          <div className="w-full h-full bg-green-800">
            <iframe
              className="w-full h-[90vh]"
              src="https://whereby.com/healthor"
              allow="camera; microphone; fullscreen; speaker; display-capture; autoplay"
            ></iframe>
          </div>
        </div>
      )}
      {isDoctor && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-info-black-64.png"
              className="w-10 h-10"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Doctors can not create appointments!
            </h3>
            <div className="w-full flex gap-3 justify-center">
              <button
                onClick={() => setIsDoctor(false)}
                className="py-2 px-4 border-2 border-blue-500 hover:bg-blue-300 rounded-md text-black hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  navigate("/appointments");
                  setIsDoctor(false);
                }}
                className="py-2 px-4 bg-blue-500 hover:bg-blue-300 rounded-md text-white"
              >
                View appointments?
              </button>
            </div>
          </div>
        </div>
      )}
      {!medicalDataStatus && userData?.token && userData?.is_patient && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 px-4 py-10 flex justify-center items-center z-40 scale overflow-y-auto">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-6 my-5 overflow-y-auto">
            <img
              alt=""
              src="/images/icons8-info-black-64.png"
              className="w-10 h-10"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Medical data form
            </h3>
            <p className="text-center">
              Complete your registration by submitting your medical data.
            </p>
            <form className="w-full">
              <div className="mb-3">
                <p>Select Race</p>

                <div className="flex gap-2">
                  <label>
                    <input
                      type="radio"
                      value="black"
                      checked={selectedRace === "black"}
                      onChange={handleRaceChange}
                    />{" "}
                    Black
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="white"
                      checked={selectedRace === "white"}
                      onChange={handleRaceChange}
                    />{" "}
                    White
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="coloured"
                      checked={selectedRace === "colored"}
                      onChange={handleRaceChange}
                    />{" "}
                    Coloured
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="other"
                      checked={selectedRace === "other"}
                      onChange={handleRaceChange}
                    />{" "}
                    Other
                  </label>
                </div>
              </div>
              <div className="">
                <label htmlFor="occupation" className="mb-1">
                  Occupation
                </label>
                <br />
                <select
                  id="occupation"
                  defaultValue={"DEFAULT"}
                  onChange={handleMedicalDataChange}
                  className="w-full bg-blue-400/10 py-1 px-3 mb-3 rounded-md cursor-pointer outline-none border border-blue-400/50"
                >
                  <option value="DEFAULT" disabled hidden>
                    Select Occupation
                  </option>

                  <option value="Vendor">Vendor</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Driver">Driver</option>
                  <option value="Civil Servant">Civil Servant</option>
                  <option value="Construction Worker">
                    Construction Worker
                  </option>
                  <option value="Labourer">Labourer</option>
                  <option value="Student/pupil">Student/pupil</option>
                  <option value="Educator">Educator</option>
                  <option value="General Assistant">General Assistant</option>
                  <option value="Admin">Admin</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="blood_group" className="mb-1">
                  Blood group
                </label>
                <br />
                <select
                  id="blood_group"
                  defaultValue={"DEFAULT"}
                  onChange={handleMedicalDataChange}
                  className="w-full bg-blue-400/10 py-1 px-3 mb-3 rounded-md cursor-pointer outline-none border border-blue-400/50"
                >
                  <option value="DEFAULT" disabled hidden>
                    Select blood group
                  </option>

                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A-">A-</option>
                  <option value="A+">A+</option>
                  <option value="B-">B-</option>
                  <option value="B+">B+</option>
                  <option value="AB-">AB-</option>
                  <option value="AB+">AB+</option>
                </select>
              </div>
              <label htmlFor="medical_cases" className="mb-1">
                Medical cases
              </label>{" "}
              <input
                id="medical_cases"
                type="text"
                onChange={handleMedicalDataChange}
                placeholder="Low Blood Sugar, Acute Malaria"
                className="w-full bg-blue-400/10 py-1 px-3 mb-3 rounded-md outline-none border border-blue-400/50"
              />
              <label htmlFor="home_address" className="mb-1">
                Home address
              </label>{" "}
              <input
                id="home_address"
                type="text"
                onChange={handleMedicalDataChange}
                placeholder="987H, Manhattan City, Miami, USA"
                className="w-full bg-blue-400/10 py-1 px-3 mb-3 rounded-md outline-none border border-blue-400/50"
              />
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
                onClick={handleSubmitMedicalData}
                className="w-full bg-blue-500 text-white my-4 p-3 outline-none rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <main className="w-full min-h-screen bg-blue-50 pt-16 sm:pt-20">
        <section className="w-full h-[300px] sm:h-[450px] bg-black/20">
          <Slideshow />
        </section>

        <section className="w-full py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
          <div className="w-fit mx-auto">
            <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
              Meet Our Expert Medical Professionals
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
          </div>
          <p className="font-light text-center mt-5">
            Discover our exceptional medical team, featuring primary care
            physicians, specialists, and other healthcare professionals. With a
            patient-centered approach and commitment to the latest research, we
            offer exceptional care. Explore their profiles below.
          </p>
          {(!userData?.token || userData?.is_patient) && (
            <div className=" mt-4 flex gap-1 items-center justify-center mb-3">
              <div className="bg-[#3b82f6]/50 rounded-full flex justify-center items-center">
                <img
                  alt=""
                  src="/images/icons8-information-64.png"
                  className="w-4 h-4"
                />
              </div>
              <p className="text-[0.75rem] bg-[#3b82f6]/20 px-2 py-[1px] rounded-full">
                Select a medical personnel to book an appointment
              </p>
            </div>
          )}
          {userData?.token && (
            <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
              {displayDocs}
            </div>
          )}
          {userData?.token && (
            <div className="flex gap-2 mt-4 justify-center">
              <ReactPaginate
                previousLabel={
                  <img
                    alt="user"
                    src="/images/icons8-back-64.png"
                    className="w-6 h-6 cursor-pointer rounded-lg hover:bg-blue-500/30"
                  />
                }
                nextLabel={
                  <img
                    alt="user"
                    src="/images/icons8-next-50.png"
                    className="w-5 h-5 cursor-pointer rounded-lg hover:bg-blue-500/30"
                  />
                }
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={
                  "h-6 flex items-center gap-2 mt-4 justify-end text-[.95rem] pag"
                }
                activeClassName={"rounded-lg bg-blue-500/70"}
              />
            </div>
          )}
          {!userData?.token && (
            <div className="w-full grid sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
              {doctorsData?.map((item, index) => {
                return <DoctorsCardOffline key={index} item={item} />;
              })}
            </div>
          )}
        </section>

        <section className="w-full min-h-[300px] bg-[#262727] py-20 text-slate-700 lg:px-[15%] px-5 font-light">
          <div className="w-fit mx-auto mb-10">
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1 text-white">
              What We Do{" "}
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#3b82f6] to-white/10"></div>
          </div>
          <div className="w-full mb-10 text-white">
            <p className="text-center">
              Welcome to our team of experienced medical professionals dedicated
              to providing high-quality patient care. We offer a wide range of
              services and prioritize open communication and a patient-centered
              approach. Explore our website to learn more about our team and how
              we can help you.
            </p>
          </div>
          <div className="block sm:flex gap-10 justify-between items-start">
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-ambulance-64.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#3b82f6] text-[1.1rem] uppercase">
                  Emergencies
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  We are always available for you 24/7, reach out to us for
                  emergencies.
                </p>
                {/* <button className="py-1 px-6 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-appointment-scheduling-50.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#3b82f6] text-[1.1rem] uppercase">
                  Appointments
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  Book Appointments with any of our medical personnels.
                </p>
                {/* <button className="py-1 px-6 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-medical-doctor-50.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#3b82f6] text-[1.1rem] uppercase">
                  Medical Advices
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  We offer the best medical advices to improve your health and
                  lifestyle.{" "}
                </p>
                {/* <button className="py-1 px-6 bg-[#3b82f6]/20 text-[#3b82f6] border border-[#3b82f6] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button> */}
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full border-t border-white/30 py-8 text-[.75rem] md:text-[.9rem] text-center bg-[#262727] text-white font-light">
          Copyright © HealthoR 2023
        </section> */}
      </main>
      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Homepage;
