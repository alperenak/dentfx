import React, { useState } from "react";
import "./tabs.scss";
export default function Tabs({
  tabsData = [{ tabName: "", onClick: () => alert("test") }],
}) {
  const [activeTabName, setActiveTabName] = useState(tabsData[0].tabName);
  return (
    <div className="topbarContainer">
      <div className="topbarContainer__navbar">
        {tabsData.map((item) => {
          return (
            <div
              className={`${"topbarContainer__navbar__navLink"} ${
                activeTabName === item.tabName &&
                "topbarContainer__navbar__navLink__active"
              }`}
              onClick={() => {
                item.onClick(activeTabName);
                setActiveTabName(item.tabName);
              }}
            >
              <div>{item.tabName} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
