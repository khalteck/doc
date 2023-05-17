import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";
import DocAppointmentRow from "../components/DocAppointmentRow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Appointments = () => {
  const { loader, userData, appointmentsList, docAppointments } =
    useAppContext();
  return (
    <>
      <Header />
      {loader && <Loader />}
      <section className="w-full min-h-[700px] mt-[80px] py-4 md:py-10 text-slate-700 lg:px-[15%] px-5 font-light text-center">
        <div className="w-fit mx-auto">
          <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
            Appointments
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
        </div>
        {userData?.is_patient || userData?.is_medic ? (
          <p className="mt-5 text-center">
            Welcome {userData?.first_name}! View your scheduled appointments
            here.
          </p>
        ) : (
          <p className="mt-5 text-center">
            Welcome Dr. {userData?.first_name} {userData?.last_name}! You can
            view your scheduled appointments here..
          </p>
        )}
        <div
          className={`w-full bg-blue-300/10 my-8 p-3 md:p-5 rounded-lg flex justify-center`}
        >
          {appointmentsList.length > 0 && userData?.is_patient ? (
            <table className="w-full border border-gray-500/30">
              <thead>
                <tr>
                  <th className="border border-gray-500/30">User</th>
                  <th className="border border-gray-500/30">Scheduled Time</th>
                  <th className="border border-gray-500/30">Scheduled Date</th>
                </tr>
              </thead>
              <tbody>
                {appointmentsList?.map((item, index) => {
                  return <AppointmentCard item={item} key={index} />;
                })}
              </tbody>
            </table>
          ) : docAppointments.length > 0 && userData?.is_medic ? (
            <table className="w-full border border-gray-500/30">
              <thead>
                <tr>
                  <th className="border border-gray-500/30">S/N</th>
                  <th className="border border-gray-500/30">First name</th>
                  <th className="border border-gray-500/30">Last name</th>
                  <th className="border border-gray-500/30">Medical case</th>
                </tr>
              </thead>
              <tbody>
                {docAppointments?.map((item, index) => {
                  return (
                    <DocAppointmentRow
                      item={item}
                      key={index}
                      docAppointments={docAppointments}
                    />
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
        {userData?.is_patient && (
          <Link to="/">
            <button className="w-fit bg-blue-500 hover:bg-blue-300 text-white my-4 mx-auto py-3 px-8 outline-none rounded-lg">
              Book new appoinment
            </button>
          </Link>
        )}
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Appointments;
