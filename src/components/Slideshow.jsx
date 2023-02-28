// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Slideshow = () => {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="slide1 h-[300px] sm:h-[450px] relative ">
            <div className="overlay lg:px-[15%] px-5 py-10 lg:p-[80px] flex items-center">
              <div className="text-white font-light">
                <h1 className="text-[1.75rem] sm:text-[2.6rem]">NEXTEnergy</h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  Maximum performance in your hand...
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#fec901] hover:bg-yellow-400/70 text-black rounded-md">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide2 h-[300px] sm:h-[450px] relative ">
            <div className="overlay lg:px-[15%] px-5 py-10 lg:p-[80px] flex items-center">
              <div className="text-white font-light">
                <h1 className="text-[1.75rem] sm:text-[2.6rem] uppercase">
                  Uninterruptible power sources
                </h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  Continous power supply is guaranteed for computers, medical
                  electronics equipment, industrial appliances etc...
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#fec901] hover:bg-yellow-400/70 text-black rounded-md">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="slide3 h-[300px] sm:h-[450px] relative ">
            <div className="overlay lg:px-[15%] px-5 py-10 lg:p-[80px] flex items-center">
              <div className="text-white font-light">
                <h1 className="text-[1.75rem] sm:text-[2.6rem]">PRESTO UPS</h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  For many areas of industry, different technologies provides
                  high performance UPS equipment.
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#fec901] hover:bg-yellow-400/70 text-black rounded-md">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slideshow;
