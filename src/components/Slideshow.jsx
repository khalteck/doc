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
          delay: 5000,
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
                <h1 className="text-[1.75rem] sm:text-[2.6rem]">
                  Company Name
                </h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  Get the best medical advices from our team of professionals...
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#3b82f6] hover:bg-[#3b82f6]/70 text-white rounded-md">
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
                  Expert Medical Professionals
                </h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  Discover our exceptional medical team...
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#3b82f6] hover:bg-[#3b82f6]/70 text-white rounded-md">
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
                <h1 className="text-[1.75rem] sm:text-[2.6rem]">
                  We Are Here For You!
                </h1>
                <div className="w-full h-[1px] bg-gradient-to-r from-white to-white/10"></div>
                <p className="text-[.8rem] sm:text-[1.3rem] mt-2 mb-5">
                  We are dedicated to providing high-quality patient care...
                </p>
                <Link to="/about">
                  <button className="py-1 sm:py-2 px-6 text-[.8rem] sm:text-[1rem] bg-[#3b82f6] hover:bg-[#3b82f6]/70 text-white rounded-md">
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
