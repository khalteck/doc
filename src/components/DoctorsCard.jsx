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

  // const urlArr = item?.profile_image.split("/");
  // const versionID = urlArr[urlArr.length - 2];
  // const publicID = urlArr[urlArr.length - 1];
  // // const path = `${versionID}/${publidID}`;

  // const isEncoded = item?.profile_image.includes("C:%5Cfakepath%5C");
  // const imagePath = isEncoded
  //   ? encodeURIComponent(`${versionID}/${publicID}`)
  //   : publicID;
  // const imageURL = `https://res.cloudinary.com/dqy5f2fji/image/upload/${imagePath}`;

  const [protocol, path] = item?.profile_image.split("://");
  const [a, b, c, d, versionID, publicID] = path.split("/");
  const encodedPath = encodeURIComponent(`${publicID}`);
  const imageURL = `${protocol}://${a}/${b}/${c}/${d}/${versionID}/${encodedPath}`;
  // console.log(imageURL);

  return (
    <div className="w-full min-h-[350px] bg-[#3b82f6] border border-[#3b82f6] cursor-pointer relative rounded-lg">
      <img
        alt=""
        src={
          item?.profile_image.includes("C:%5Cfakepath%5C")
            ? imageURL
            : item?.profile_image
        }
        className="w-full h-[350px] object-cover hover:opacity-60 transition-all duration-300 rounded-lg"
      />
      <div className="w-full h-fit px-5 text-white font-light pb-3 pt-2 bg-[#262727]/80 absolute left-0 bottom-0 rounded-b-lg rounded-tr-[100px]">
        <p className="font-bold text-[1.3rem]">
          {" "}
          Dr. {item?.first_name} {item?.last_name}
        </p>
        <p className="font-normal mt-1">
          Specialty:{" "}
          <span className="text-blue-300 lowercase">
            {item?.specialty === "OTHER" ? item?.other : item?.specialty}
          </span>
        </p>
        <p className="font-normal">
          Years of experience:{" "}
          <span className="text-blue-300">{item?.years_of_experience}</span>
        </p>
        <div className="w-full">
          <button
            onClick={link}
            className="w-fit bg-[#3b82f6] hover:bg-[#3b82f6]/60 text-[0.85rem] font-medium mt-2 px-6 py-1 outline-none rounded-lg text-white"
          >
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
