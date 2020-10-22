import React from "react";
import styles from "./packages.module.scss";

export default function Packages({ children, title, description }) {
  console.log(children);
  return (
    <div className={"packagesCard"}>
      <div className={"avatar"}>
        <div className={"icon"}>{children}</div>
      </div>
      <div className={"packagesText"}>
        <div className={"packagesTitle"}>{title}</div>
        <div className={"packagesDescription"}>{description}</div>
      </div>
    </div>
  );
}
