import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link to={`/doctor/${item?.first_name}`}>
      <div className="w-full min-h-[240px] bg-[#3b82f6] border border-[#3b82f6] cursor-pointer relative">
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
    </Link>
  );
};

export default ProductCard;
