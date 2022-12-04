import React from "react";

const ImageThumb = ({ label, src }) => {
  return (
    <div className=" w-full h-auto gap-x-1 bg-gray-200 rounded-md p-4">
      <p className="text-[14px] font-semibold mb-4">{label}</p>
      <img
        className="w-full h-auto"
        src={src?.length > 0 ? URL.createObjectURL(src[0]) : null}
      />
    </div>
  );
};

export default ImageThumb;
