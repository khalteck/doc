import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Appointments = () => {
  const { loader, userData, appointmentsList } = useAppContext();
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
        {userData?.is_patient ? (
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
          className={`w-full min-h-[250px] bg-blue-300/10 my-8 p-3 md:p-5 rounded-lg flex justify-center ${
            !appointmentsList.length > 0 && "items-center"
          }`}
        >
          {appointmentsList.length > 0 ? (
            appointmentsList?.map((item, index) => {
              return <AppointmentCard item={item} key={index} />;
            })
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
        <Link to="/">
          <button className="w-fit bg-blue-500 hover:bg-blue-300 text-white my-4 mx-auto py-3 px-8 outline-none rounded-lg">
            Book new appoinment
          </button>
        </Link>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Appointments;
