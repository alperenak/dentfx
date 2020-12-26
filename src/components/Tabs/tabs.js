import React, { useState } from "react";
import "./tabs.scss";
export default function Tabs({
  tabsData = [{ tabName: "", onClick: () => alert("test") }],
}) {
  const [activeTabName, setActiveTabName] = useState(tabsData[0].tabName);
  return (
    <div className="topbarContainer">
      <div className="profile__tabs">
        {tabsData.map((item) => {
          return (
            <div
              className={`${"profile__tabs__tab"} ${
                activeTabName === item.tabName &&
                "profile__tabs__selected"
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

