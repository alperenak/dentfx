import React from 'react';
import DropdownItem from './sub-components/DropdownItem/dropdownItem';
import Selectable from './sub-components/Selectable/selectable';

export default function Dropdown(props) {
  let { type } = props;
  return (
    <>
      <Selectable v-if={type === 'selectable'} {...props} />
      <DropdownItem v-if={type === 'dropdownItem'} {...props} />
    </>
  );
}
