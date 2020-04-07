import React from "react";

const ErrorMessage = (props) => {
  const { errors } = props;
  return (
    <p
      style={{
        fontSize: "14px",
        fontWeight: "bold",
        color: "#ffffff",
        background: "#F7645C",
        padding: "5px",
      }}
    >
      {errors.error[0].msg}
    </p>
  );
};

export default ErrorMessage;