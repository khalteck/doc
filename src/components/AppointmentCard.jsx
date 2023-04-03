import moment from "moment";

const AppointmentCard = ({ item }) => {
  const time12Hour = moment(item?.schedule_time, "HH:mm:ss").format("hh:mm A");

  return (
    <div className="w-full h-fit border border-blue-400/30 flex gap-3 md:gap-5 items-center mb-4 p-3 bg-white rounded-md">
      <img
        alt=""
        src="/images/icons8-appointment-scheduling-50.png"
        className="w-8 h-8 md:w-12 md:h-12 mr-auto"
      />
      {/* <p className="font-medium mr-auto">Dr who joe</p> */}

      <p className="md:text-[1.25rem]">
        Time: <span className="font-normal">{time12Hour}</span>
      </p>
      <p className="md:text-[1.25rem]">
        Date: <span className="font-normal">{item?.schedule_date}</span>
      </p>
    </div>
  );
};

export default AppointmentCard;
