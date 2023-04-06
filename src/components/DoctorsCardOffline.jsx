import { Link } from "react-router-dom";

const DoctorsCardOffline = ({ item }) => {
  return (
    <Link to={`/doctor/${item?.name}`}>
      <div className="w-full min-h-[350px] bg-[#3b82f6] border border-[#3b82f6] cursor-pointer relative rounded-lg">
        <img
          alt=""
          src={item?.image}
          className="w-full h-[350px] object-cover hover:opacity-60 transition-all duration-300 rounded-lg"
        />
        <div className="w-full h-fit px-5 text-white font-light pb-3 pt-2 bg-[#262727]/80 absolute left-0 bottom-0 rounded-b-lg rounded-tr-[100px]">
          <p className="font-bold text-[1.3rem]"> {item?.name}</p>
          <p className="font-normal mt-1">
            Specialty: <span className="text-blue-300">*********</span>
          </p>
          <p className="font-normal">
            Years of experience: <span className="text-blue-300">3 Years</span>
          </p>
          <div className="w-full">
            <button className="w-fit bg-[#3b82f6] hover:bg-[#3b82f6]/60 text-[0.85rem] font-medium mt-2 px-6 py-1 outline-none rounded-lg text-white">
              Book appointment
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-full min-h-[240px] bg-[#3b82f6] border border-[#3b82f6] cursor-pointer relative">
        <img
          alt=""
          src={item?.image}
          className="w-full h-[240px] object-cover hover:opacity-60 transition-all duration-300"
        />
        <div className="w-full h-12 text-white font-light text-center py-3 bg-[#262727]/80 absolute left-0 bottom-0">
          {item?.name}
        </div>
      </div> */}
    </Link>
  );
};

export default DoctorsCardOffline;
