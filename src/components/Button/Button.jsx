import React from "react";

function Button({ btnText, className, onClick }) {
  return (
    <>
      <button onClick={onClick} className={className}>
        {btnText}
      </button>
    </>
  );
}

export default Button;
