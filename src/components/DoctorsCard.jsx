import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";

const ProductCard = ({ item }) => {
  const { userData, navigate, setIsDoctor, isDoctor } = useAppContext();
  function link() {
    if (userData?.is_patient) {
      navigate(`/doctor/${item?.first_name}`);
    } else {
      setIsDoctor(true);
    }
  }
  return (
    <div
      onClick={link}
      className="w-full min-h-[240px] bg-[#3b82f6] border border-[#3b82f6] cursor-pointer relative"
    >
      <img
        alt=""
        src={`${
          item?.last_name === "Eze"
            ? "/images/doc1.jpg"
            : item?.last_name === "Doe"
            ? "/images/med1.jpg"
            : item?.last_name === "Ajani"
            ? "/images/doc2.jpg"
            : item?.last_name === "Ada"
            ? "/images/doc3.jpg"
            : "/images/med2.jpg"
        }`}
        className="w-full h-[240px] object-cover hover:opacity-60 transition-all duration-300"
      />
      <div className="w-full h-12 text-white font-light text-center py-3 bg-[#262727]/80 absolute left-0 bottom-0">
        Dr. {item?.first_name} {item?.last_name}
      </div>
    </div>
  );
};

export default ProductCard;
