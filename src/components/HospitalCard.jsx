const HospitalCard = ({ hospitalCard }) => {
  return (
    <div>
      <h1 className="text-[1.2rem] sm:text-[2rem] font-normal uppercase text-center mb-1">
        Hospital Card
      </h1>
      <div className="w-full overflow-x-auto">
        <div className="w-full sm:w-[600px] min-h-[250px] border-blue-500 border-4 mx-auto rounded-xl my-5 p-5">
          <div className="flex justify-between">
            <div className="py-2 pr-8 text-[1.1rem] sm:text-[1.25rem] text-start border-b-2 border-blue-500 w-fit">
              Full name:{" "}
              <span className="font-medium">
                {hospitalCard?.first_name} {hospitalCard?.last_name}
              </span>
            </div>
            <img alt="" src="/images/logo.png" className="w-12 h-12" />
          </div>
          <div className="w-full min-h-[200px] p-4 mt-4 border-2 border-blue-500 rounded-lg bg-blue-400/20">
            <div className="py-2 pr-8 text-[1.1rem] sm:text-[1.25rem] text-start border-b-2 border-blue-500 w-fit">
              Blood Group:{" "}
              <span className="font-medium">
                {hospitalCard?.medical_record?.blood_group}
              </span>
            </div>
            <div className="flex gap-3 flex-wrap mt-4">
              <div className="py-2 text-[1.1rem] md:text-[1.25rem] text-start border-b-2 border-blue-500">
                Hospital Branch:{" "}
                <span className="font-medium">
                  {hospitalCard?.medical_record?.hospital_branch}
                </span>
              </div>
              <div className="py-2 text-[1.1rem] md:text-[1.25rem] text-start border-b-2 border-blue-500">
                Medical Cases:{" "}
                <span className="font-medium">
                  {hospitalCard?.medical_record?.medical_cases}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalCard;
