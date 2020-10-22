import React from "react";
import Button from "../../../Button/button";
import styles from "./bigPackages.module.scss";

export default function BigPackages({
  packageName,
  children,
  packagePrice,
  packageDescription,
  packagesFeatures,
  buttonTitle,
}) {
  return (
    <div className={"PackagesContainer"}>
      <div className={"icon"}>{children}</div>
      <div className={"packageName"}>{packageName}</div>
      <div className={"packagePrice"}>
        {packagePrice}
        <span className={"currency"}>TL</span>
        <span className={"slash"}>/</span>
        <span className={"year"}>YILLIK</span>
      </div>
      <div className={"packageDescription"}>{packageDescription}</div>
      <div className={"packagesFeatures"}>
        {packagesFeatures.map((item, i) => {
          return (
            <div key={i} className={"PackagesFeaturesLabel"}>
              {item}
            </div>
          );
        })}
      </div>
      <Button title={buttonTitle} type={"tertiary"} style={"packages"} />
    </div>
  );
}
