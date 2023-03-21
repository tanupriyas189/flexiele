import React from "react";

function Card({ name, image, location, date, stageData }) {
  return (
    <div
      className={`bg-white px-4 py-2 shadow-md rounded-lg flex space-x-2 w-full text-sm ${
        stageData === "Hired"
          ? "border border-green-500"
          : stageData === "Rejected"
          ? "border border-red-500"
          : ""
      }`}
    >
      {/* card */}
      <div className="h-6 w-6 rounded-full bg-gray-300">
        <img
          src={image}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div>
        <h1>{name}</h1>
        <div className="flex space-x-2 w-full">
          <h2>{location}</h2>
          <h2>{date}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
