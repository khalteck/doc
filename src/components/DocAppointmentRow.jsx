const DocAppointmentRow = ({ item, index, docAppointments }) => {
  return (
    <tr className="border border-gray-500/30">
      <td className="border border-gray-500/30">{docAppointments?.length}</td>
      <td className="border border-gray-500/30">{item?.first_name}</td>
      <td className="border border-gray-500/30">{item?.last_name}</td>
      <td className="border border-gray-500/30">{item?.medical_case}</td>
    </tr>
  );
};

export default DocAppointmentRow;
