import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import doctorData from "../data/Doctors.json";
import ScrollToTop from "../ScrollToTop";

const Doctor = () => {
  const { name } = useParams();
  const eachDoctor = doctorData?.filter((item) => item.name === name)[0];
  return (
    <>
      <Header />
      <section className="w-full min-h-[90vh] mt-[80px] pt-8">
        <h1 className="font-bold text-[1.5rem] text-center mb-4">
          {eachDoctor?.name}
        </h1>
        <div className="w-full text-center">
          <img
            alt=""
            src={eachDoctor?.image}
            className="w-[300px] h-[240px] mx-auto object-cover hover:opacity-60 transition-all duration-300 rounded-lg"
          />
        </div>
      </section>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Doctor;
