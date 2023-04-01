import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useAppContext } from "../contexts/AppContext";
import ScrollToTop from "../ScrollToTop";

const Appointments = () => {
  const { loader } = useAppContext();
  return (
    <>
      <Header />
      {loader && <Loader />}
      <section className="w-full min-h-[700px] mt-[80px] py-4 md:py-10 text-slate-700 lg:px-[15%] px-5 font-light">
        <div className="w-fit mx-auto">
          <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
            Appointments
          </h1>
          <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
        </div>
        <div className="w-full min-h-[300px] bg-blue-400/10 my-8 rounded-lg flex justify-center items-center">
          <div className="text-center">
            <img alt="" src="/images/empty.png" className="w-24 h-24 mx-auto" />
            <p className="mt-3 text-slate-400 text-[1.2rem]">
              No appointments yet...
            </p>
          </div>
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Appointments;
