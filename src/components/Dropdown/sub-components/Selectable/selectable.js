import React from 'react';

export default function Selectable({
  defaultValue,
  labelName,
  selectableData,
  value,
  id,
  withId,
  onChange,
}) {
  return (
    <>
      {withId ? (
        <>
          <label className="mt-2" htmlFor={id}>
            {labelName}
          </label>
          <select
            className="form-control"
            id={id}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          >
            {defaultValue ? (
              <option selected="selected">{defaultValue}</option>
            ) : (
              ''
            )}
            {selectableData
              .filter((item) => {
                return defaultValue !== item.value;
              })
              .map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.value}
                  </option>
                );
              })}
          </select>
        </>
      ) : (
        <>
          <label className="mt-2" htmlFor={id}>
            {labelName}
          </label>
          <select
            className="form-control"
            id={id}
            onChange={(e) => onChange(e.target.value)}
            value={value}
          >
            {defaultValue ? (
              <option selected="selected">{defaultValue}</option>
            ) : (
              ''
            )}
            {selectableData
              .filter((item) => {
                return defaultValue !== item;
              })
              .map((item, index) => {
                return <option key={index}>{item}</option>;
              })}
          </select>
        </>
      )}
    </>
  );
}
