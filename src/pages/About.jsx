import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../ScrollToTop";

const About = () => {
  return (
    <>
      <Header />
      <section className="w-full min-h-screen">
        <div className="w-full h-[350px] sm:h-[400px] about bg-aboutbg bg-cover bg-right lg:bg-center bg-no-repeat relative">
          <div className="w-full h-full bg-gradient-to-b from-zinc-900/70 to-zinc-700/40 py-[150px] px-[5%] sm:px-[10.5%] text-slate-200 first-section-text">
            <h1 className="text-[2rem] font-bold uppercase md:text-[2.5rem] lg:text-[3.5rem] relative top-2 sm:top-10 text-center">
              About Us
            </h1>
          </div>
          <svg
            className="w-full absolute bottom-[-1px] left-0 z-[0] block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e2e8f0"
              fillOpacity="1"
              d="M0,0L60,0C120,0,240,0,360,16C480,32,600,64,720,101.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="px-[5%] sm:px-[10.5%] pb-10 sm:py-24 text-[1.2rem] sm:text-[1.3rem] bg-[#e2e8f0]">
          <p>
            Welcome to our website for medical personnel! We are a team of
            highly skilled and compassionate healthcare professionals who are
            committed to providing the best possible care to our patients.
            <br />
            <br /> Our team includes primary care physicians, specialists, and
            other medical professionals who bring a wealth of experience and
            expertise to every patient interaction. We believe in a
            patient-centered approach to healthcare, which means that we
            prioritize open communication, empathy, and respect in all our
            interactions with our patients.
            <br />
            <br /> At our practice, we believe that healthcare is not just about
            treating illness, but about promoting overall wellness and improving
            quality of life. We stay up-to-date with the latest medical research
            and technology to provide our patients with the most effective and
            innovative treatments available.
            <br />
            <br /> Thank you for considering us as your healthcare partners. We
            invite you to explore our website to learn more about our team, our
            services, and how we can help you achieve your health goals.
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default About;
