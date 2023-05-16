import moment from "moment";

const AppointmentCard = ({ item }) => {
  const time12Hour = moment(item?.schedule_time, "HH:mm:ss").format("hh:mm A");

  return (
    <tr className="border border-gray-500/30">
      <td className="py-3 border border-gray-500/30">
        <img
          alt=""
          src="/images/icons8-appointment-scheduling-50.png"
          className="w-8 h-8 mx-auto"
        />
      </td>
      <td className="border border-gray-500/30">{time12Hour}</td>
      <td className="border border-gray-500/30">{item?.schedule_date}</td>
    </tr>
  );
};

export default AppointmentCard;
