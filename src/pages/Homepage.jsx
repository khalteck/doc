// import Footer from "../components/Footer";
import Header from "../components/Header";
import DoctorsCard from "../components/DoctorsCard";
import Slideshow from "../components/Slideshow";
import doctorsData from "../data/Doctors.json";
import ScrollToTop from "../ScrollToTop";

const Homepage = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen bg-blue-50 pt-16 sm:pt-20">
        <section className="w-full h-[300px] sm:h-[450px] bg-black/20">
          <Slideshow />
        </section>

        <section className="w-full py-10 mb-5 text-slate-700 lg:px-[15%] px-5">
          <div className="w-fit mx-auto">
            <h1 className="text-[1.2rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1">
              Uninterruptible power supply
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-slate-700 to-white/10"></div>
          </div>
          <p className="font-light text-center mt-5">
            Presto-UPS Kft was formed by Hungarian private individuals by a
            manufacturer belonging to the European elite <br /> RIELLO Power
            Solutions Spa.- to represent Hungary.
          </p>
          <div className="w-full grid sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {doctorsData?.map((item, index) => {
              return <DoctorsCard key={index} item={item} />;
            })}
          </div>
        </section>

        <section className="w-full min-h-[300px] bg-[#262727] py-20 text-slate-700 lg:px-[15%] px-5 font-light">
          <div className="w-fit mx-auto mb-10">
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1 text-[#fec901]">
              nighun
            </h1>
            <div className="w-full h-[1px] bg-gradient-to-r from-[#fec901] to-white/10"></div>
          </div>
          <div className="w-full mb-10 text-white">
            <p className="text-center">
              Welcome to Nighun! We are a team of dedicated professionals
              committed to providing reliable, efficient, and cost-effective UPS
              systems. With years of industry experience, we offer customized
              solutions to meet your specific power needs. Our passion for
              excellent customer service ensures that every interaction is
              positive and productive. We take pride in our commitment to
              delivering the best products and services, and we look forward to
              helping you find the right power solutions for your business or
              home.
            </p>
          </div>
          <div className="block sm:flex gap-10 justify-between items-start">
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-tools-50.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#fec901] text-[1.1rem] uppercase">
                  Installation
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  Design, transport and installation of Riello uninterruptible
                  power sources.
                </p>
                <button className="py-1 px-6 bg-[#fec901]/20 text-[#fec901] border border-[#fec901] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 mb-16 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-settings-50.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#fec901] text-[1.1rem] uppercase">
                  Service services
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  On-site and service site repairs // Battery inspection and
                  replacement
                </p>
                <button className="py-1 px-6 bg-[#fec901]/20 text-[#fec901] border border-[#fec901] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button>
              </div>
            </div>
            <div className="w-full sm:w-1/3 items-center sm:items-start flex gap-3 sm:mb-0">
              <img
                alt=""
                src="/images/icons8-maintenance-64.png"
                className="w-10 h-10"
              />
              <div className="text-center sm:text-start">
                <h2 className="text-[#fec901] text-[1.1rem] uppercase">
                  Maintenance services
                </h2>
                <p className="text-white mt-3 mb-5 text-[.9rem]">
                  Regular inspection under contract, required maintenance
                </p>
                <button className="py-1 px-6 bg-[#fec901]/20 text-[#fec901] border border-[#fec901] hover:bg-yellow-400/70 hover:text-black rounded-md text-[0.9rem]">
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-16 px-3 sm:px-8 font-light">
          <div className="w-fit mx-auto mb-10">
            <h1 className="text-[1.5rem] sm:text-[2.5rem] font-normal uppercase text-center mb-1 text-slate-700">
              Partners
            </h1>
          </div>
          <div className="w-full grid grid-cols-3 sm:flex gap-6 justify-center">
            <a href="http://www.presto-ups.hu/">
              <div className="1/3 sm:w-[180px] h-fit">
                <img
                  alt=""
                  src="/images/presto-ups-logo.png"
                  className="w-full h-auto"
                />
              </div>
            </a>
            <div className="1/3 sm:w-[180px] h-fit">
              <img
                alt=""
                src="/images/afis logo.jpeg"
                className="w-full h-auto"
              />
            </div>{" "}
            <div className="1/3 sm:w-[180px] h-fit">
              <img
                alt=""
                src="/images/IROKO LOGO.png"
                className="w-full h-auto"
              />
            </div>{" "}
          </div>
        </section>
      </section>
      <ScrollToTop />
      {/* <Footer id="footer" /> */}

      {/* <div className="w-full min-h-screen bg-blue-50">
        <section className="top--section h-[500px] md:h-[600px] relative">
          <div className="overlay px-3 py-10 lg:p-[80px] block md:flex items-start justify-between">
            <div className="mb-8 md:mb-0">
              <img
                alt=""
                src="/images/logo.jpeg"
                className="w-[100px] md:w-[200px] h-[70px] md:h-[150px] rounded-lg"
              />
            </div>
            <div className="hero--text hidden md:block md:text-[60px] p-6 bg-black/40">
              WEBSITE
              <br /> UNDER
              <br /> CONSTRUCTION
            </div>
            <div className="hero--text block md:hidden text-[1.5rem] p-6 bg-black/40 rounded-lg">
              WEBSITE
              <br /> UNDER CONSTRUCTION
            </div>
          </div>
          <div className="w-[90%] md:w-2/5 md:h-[400px] bg-blue-50 shadow-xl rounded-lg p-5 absolute bottom-[-50px] md:bottom-[-150px] left-[50%] translate-x-[-50%] md:translate-x-0 md:left-20">
            <div className="w-full flex gap-[100px] justify-center">
              <div className="w-[60px]">
                <img
                  alt=""
                  src="/images/icons8-hungary-48.png"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-[60px]">
                <img
                  alt=""
                  src="/images/icons8-nigeria-flag-48.png"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="w-full flex">
              <img
                alt=""
                src="/images/budapest.png"
                className="w-1/2 h-auto "
              />
              <img alt="" src="/images/lagos.png" className="w-1/2 h-auto " />
            </div>
          </div>
        </section>

        <div className="w-full flex">
          <div className="w-full flex mt-[80px] justify-end px-10">
            <img
              alt=""
              src="/images/taxi-construction.png"
              className="w-[220px] md:w-[300px] h-auto mx-auto md:mx-0 swing"
            />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Homepage;
