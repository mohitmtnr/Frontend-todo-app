import React from "react";
import { useAlert } from "../context/alertContext";
export default function Alert() {
  const { alert } = useAlert();

  let alertSign = "";
  const findSign = () => {
    if (alert.type === "danger") {
      alertSign = "circle-xmark";
    } else if (alert.type === "warning") {
      alertSign = "triangle-exclamation";
    } else if (alert.type === "success") {
      alertSign = "circle-check";
    } else {
      alertSign = "circle-question";
    }
  };
  alert && findSign();
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} position-fixed alert-dismissible fade show d-flex justify-content-between `}
        role="alert"
        style={{ right: "0", top: "4em" }}
      >
        <div>
          <i className={`fa-solid fa-${alertSign} mx-3`}></i>
          <strong style={{ textTransform: "capitalize" }}>
            {alert.message}
          </strong>
        </div>
      </div>
    )
  );
}
