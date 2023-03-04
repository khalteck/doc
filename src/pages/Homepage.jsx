// import Footer from "../components/Footer";
import Header from "../components/Header";
import DoctorsCard from "../components/DoctorsCard";
import Slideshow from "../components/Slideshow";
import doctorsData from "../data/Doctors.json";
import ScrollToTop from "../ScrollToTop";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen bg-blue-50 pt-16 sm:pt-20">
        <section className="w-full h-[300px] sm:h-[450px] bg-black/20">
          <Slideshow />
        </section>

        <section className="w-full py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
          <div className="w-fit mx-auto">
            <h1 className="text-[1.2rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1">
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
          <div className="w-full grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {doctorsData?.map((item, index) => {
              return <DoctorsCard key={index} item={item} />;
            })}
          </div>
        </section>

        <section className="w-full min-h-[300px] bg-[#262727] py-20 text-slate-700 lg:px-[15%] px-5 font-light">
          <div className="w-fit mx-auto mb-10">
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1 text-white">
              Company name
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
                src="/images/icons8-person-calendar-50.png"
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
                src="/images/icons8-advice-50.png"
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
          Copyright © Company name 2023
        </section> */}
      </main>
      <Footer />
      <ScrollToTop />
      {/* <Footer id="footer" /> */}
    </>
  );
};

export default Homepage;
