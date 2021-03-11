import React from 'react';
import './dropdownItem.module.scss';
export default function DropdownItem(props) {
  let { dropdownActive } = props;
  let dropdownActiveBool = dropdownActive;
  return (
    <div id="dropdownSpesific">
      {props.parent}
      <div
        className={`dropdown__dropdownContent ${
          dropdownActiveBool ? 'dropdown__dropdownActive' : ''
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}
