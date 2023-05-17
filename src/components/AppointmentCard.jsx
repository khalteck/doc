import moment from "moment";

const AppointmentCard = ({ item, index }) => {
  const time12Hour = moment(item?.schedule_time, "HH:mm:ss").format("hh:mm A");

  return (
    <tr className="border border-gray-500/30">
      <td className="py-3 border border-gray-500/30">{index + 1}</td>
      <td className="border border-gray-500/30">{time12Hour}</td>
      <td className="border border-gray-500/30">{item?.schedule_date}</td>
    </tr>
  );
};

export default AppointmentCard;
