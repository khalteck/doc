import moment from "moment";

const DiagnosisRow = ({ item }) => {
  const time = item?.time_submitted;
  const formattedTime = moment(time, "HH:mm:ss.SSSSSS").format("h:mm A");
  return (
    <tr className="border border-gray-500/30">
      <td className="border border-gray-500/30">{item?.date_submitted}</td>
      <td className="border border-gray-500/30 whitespace-nowrap">
        {formattedTime}
      </td>
      <td className="border border-gray-500/30">{item?.diagnosis}</td>
      <td className="border border-gray-500/30">{item?.prescription}</td>
      <td className="border border-gray-500/30">{item?.additional_notes}</td>
    </tr>
  );
};

export default DiagnosisRow;
