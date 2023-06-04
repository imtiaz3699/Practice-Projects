import React from "react";

function Input({ placeholder, type, onChange, value, className }) {
  return (
    <>
      <input
        type={type}
        className={className}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
