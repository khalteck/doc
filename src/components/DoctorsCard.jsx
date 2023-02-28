import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link
      to={
        item.name !== "Solar inverter"
          ? `/product/${item.name}`
          : "https://www.aros-solar.com/en"
      }
    >
      <div className="w-full min-h-[240px] bg-[#fec901] border border-[#fec901] cursor-pointer relative">
        <img
          alt=""
          src={item?.image}
          className="w-full min-h-[240px] object-cover hover:opacity-60 transition-all duration-300"
        />
        <div className="w-full h-16 text-[#fec901] font-light text-center py-3 bg-[#262727]/80 absolute left-0 bottom-0">
          {item?.name}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
