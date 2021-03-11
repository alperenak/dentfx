import React from 'react';
import './patientSearch.module.scss';
export default function PatientSearch({ patientData, onClick }) {
  return (
    <div className="list-group">
      {patientData.slice(0, 3).map((item, index) => {
        return (
          <div
            key={index}
            className="list-group-item list-group-item-action"
            aria-current="true"
            onClick={() => {
              onClick({
                fullname: `${item.name} ${item.surname}`,
                id: item.id,
              });
            }}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{`${item.name} ${item.surname}`}</h5>
              <small>{item.country}</small>
            </div>
            <p className="mb-1">{item.phone}</p>
            {/* <small>Donec id elit non mi porta.</small> */}
          </div>
        );
      })}
    </div>
  );
}
