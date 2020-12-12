import React from "react";
import Selectable from "./sub-components/selectable";

export default function Dropdown(props) {
  let { dropdown, type } = props;
  return (
    <>
      <Selectable v-if={type === "selectable"} {...props} />
    </>
  );
}
