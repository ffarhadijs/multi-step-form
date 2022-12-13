import React from "react";

const Button = ({ label, disable, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`bg-blue-500 rounded-md hover:shadow-lg px-4 py-2 mx-2 text-white font-vazir text-[14px] font-semibold hover:bg-blue-700 transition-colors duration-300 ${
        disable && " bg-gray-300 hover:bg-gray-300 hover:shadow-none"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
