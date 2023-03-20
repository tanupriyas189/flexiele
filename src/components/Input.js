import React from "react";

function Input({ label, type, setValue }) {
  return (
    <div className="w-full">
      <h1>{label}</h1>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
        className="px-2 py-1 outline-none border rounded-lg w-full"
      />
    </div>
  );
}

export default Input;
