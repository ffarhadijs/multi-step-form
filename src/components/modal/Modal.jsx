import React, { useState } from "react";

const Modal = ({ img, open, handleClose }) => {
  return (
    <>
      {open ? (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-80 cursor-default z-50"
          role={"button"}
          onClick={handleClose}
        >
          <img
            onClick={(e) => e.stopPropagation()}
            src={img}
            alt="modal"
            className="absolute top-1/2 right-1/2 max-w-2xl max-h-[600px] w-[300px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[450px] md:h-auto translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
