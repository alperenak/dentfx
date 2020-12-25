import React from "react";
import styles from "./patientSearch.module.scss";
export default function PatientSearch({ patientData, onClick }) {
  return (
    <div class={`list-group${styles.patientSearch}`}>
      {patientData.map((item) => {
        return (
          <div
            class="list-group-item list-group-item-action"
            aria-current="true"
            onClick={() => {
              onClick(item.patientName);
            }}
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{item.patientName}</h5>
              <small>{item.patientRecord}</small>
            </div>
            <p class="mb-1">{item.birth}</p>
            {/* <small>Donec id elit non mi porta.</small> */}
          </div>
        );
      })}
    </div>
  );
}
