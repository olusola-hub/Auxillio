import React from "react";

const Learning = ({ image, code, title, info, button }) => {
  return (
    <div className="learning-container p-4">
      <div className="grid grid-cols-6 items-center gap-4 border rounded-lg p-4 shadow-lg">
        {/* Course Image */}
        <div className="col-span-2">
          <img src={image} alt={`${title}`} className="rounded" />
        </div>

        {/* Course Details */}
        <div className="col-span-4 space-y-2">
          <p className="text-sm font-semibold text-gray-600">{code}</p>
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-700">{info}</p>
          <button
            className="py-3 px-8 mt-5 rounded border bg-blue-400 text-white hover:bg-blue-500 transition duration-200 ease-in-out"
          >
            Learn {button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
