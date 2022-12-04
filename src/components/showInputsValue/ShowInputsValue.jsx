import React from "react";

const ShowInputsValue = ({ label, value }) => {
  return (
    <div className="flex flex-row justify-start items-center w-full gap-x-1 bg-gray-200 rounded-md p-4">
      <span className=" w-24 text-[14px] font-semibold">{label}</span>
      <span className="text-[13px] ">{value}</span>
    </div>
  );
};

export default ShowInputsValue;
