import { useState } from "react";
import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";
import DiagnosisRow from "../components/DiagnosisRow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HospitalCard from "../components/HospitalCard";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Documents = () => {
  const {
    loader,
    userData,
    submitError,
    handledocumentsDataChange,
    handleFileChange,
    handleSubmitDoc,
    DocSubmitSuccess,
    diagnosis,
    hospitalCard,
  } = useAppContext();

  const [submitDoc, setSubmitDoc] = useState(false);
  function toggleSubmitDoc() {
    setSubmitDoc((prev) => !prev);
  }

  return (
    <>
      <Header />
      {loader && <Loader />}
      {DocSubmitSuccess && (
        <div className="w-full h-full fixed top-0 left-0 bg-black/90 p-4 flex justify-center items-center z-40 scale">
          <div className="w-full sm:w-[550px] flex flex-col gap-4 items-center bg-white rounded-lg p-5">
            <img
              alt=""
              src="/images/icons8-checkmark-64.png"
              className="w-16 h-16"
            />
            <h3 className="font-medium text-[1.1rem] sm:text-[1.3rem] text-center">
              Document submitted Successfully!
            </h3>
          </div>
        </div>
      )}

      <section className="w-full min-h-[700px] mt-[80px] pt-4 pb-8 md:py-10 text-slate-700 lg:px-[15%] px-5 font-light text-center">
        <div className="w-full flex flex-wrap justify-center gap-20 mt-4 md:mt-10">
          <div className="mb-5">
            <div className="w-fit mx-auto">
              <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
                Documents
              </h1>
              <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
            </div>
            <p className="mt-5 text-center">
              Welcome {userData?.first_name}! You can submit your hospital
              documents here.
            </p>
            <button
              onClick={toggleSubmitDoc}
              className="py-2 mt-5 px-6 text-[.8rem] sm:text-[1rem] bg-[#3b82f6] hover:bg-blue-300 text-white rounded-md"
            >
              {submitDoc ? "Close Form" : "Submit Document"}
            </button>

            {submitDoc && (
              <div
                className={`w-full md:w-[600px] min-h-[400] bg-blue-300/10 my-8 mx-auto p-3 md:p-5 rounded-lg flex justify-center`}
              >
                <form>
                  <label
                    htmlFor="title"
                    className="mb-1 font-medium text-[1.2rem]"
                  >
                    Document Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    onChange={handledocumentsDataChange}
                    placeholder="E.g Birth Certificate"
                    className="w-full bg-[#3b82f6]/20 mb-4 mt-2 p-3 outline-none rounded-lg"
                  />

                  <label
                    htmlFor="description"
                    className="mb-1 font-medium text-[1.2rem]"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    onChange={handledocumentsDataChange}
                    placeholder="E.g Birth Certificate"
                    className="w-full bg-[#3b82f6]/20 mb-4 mt-2 p-3 outline-none rounded-lg"
                  />

                  <label
                    htmlFor="doc_file"
                    className="mb-1 font-medium text-[1.2rem]"
                  >
                    Upload Document
                  </label>
                  <input
                    id="doc_file"
                    type="file"
                    onChange={handleFileChange}
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
                    onClick={handleSubmitDoc}
                    className="w-full bg-[#3b82f6] mb-6 mt-2 p-3 outline-none rounded-lg text-white"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </div>
          <>
            <HospitalCard hospitalCard={hospitalCard} />;
          </>
        </div>

        <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1 mt-10 border-t border-blue-500 pt-8">
          Diagnosis
        </h1>
        <div className="w-full overflow-x-auto">
          {userData?.is_patient && (
            <table className="w-full border border-gray-500/30 min-w-[1100px]">
              <thead>
                <tr>
                  <th className="border border-gray-500/30">Date submitted</th>
                  <th className="border border-gray-500/30">Time</th>
                  <th className="border border-gray-500/30">Diagnosis</th>
                  <th className="border border-gray-500/30">Prescription</th>
                  <th className="border border-gray-500/30">Notes</th>
                </tr>
              </thead>
              <tbody>
                {diagnosis?.map((item, index) => {
                  return (
                    <DiagnosisRow
                      item={item}
                      key={index}
                      diagnosis={diagnosis}
                    />
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Documents;
