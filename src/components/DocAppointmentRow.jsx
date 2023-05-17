const DocAppointmentRow = ({ item, index, docAppointments }) => {
  return (
    <tr className="border border-gray-500/30">
      <td className="border border-gray-500/30">{docAppointments?.length}</td>
      <td className="border border-gray-500/30">
        {item?.first_name} {item?.last_name}
      </td>
      <td className="border border-gray-500/30">{item?.medical_case}</td>
      <td className="border border-gray-500/30">{item?.schedule_date}</td>
      <td className="border border-gray-500/30">{item?.schedule_time}</td>
    </tr>
  );
};

export default DocAppointmentRow;
