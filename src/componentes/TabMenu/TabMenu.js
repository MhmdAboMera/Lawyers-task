import style from "./TabMenu.module.css";
import React, { useState } from "react";
import Tab from "../Tab/Tab";
import Price from "../price/Price";
import Time from "../Time/Time";
// import Tab from "./Tab";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("أسعار الخدمات");

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div className={`${style.tabMenu}`}>
      <h3 className={`${style.information} mb-3`}>معلومات الحجز</h3>
      <div className={`${style.tabMenuContant}`}>
        <Tab
          label="أسعار الخدمات"
          activeMenu={activeTab === "أسعار الخدمات"}
          onClick={() => handleTabClick("أسعار الخدمات")}
        />
        <Tab
          label="أوقات العمل"
          activeMenu={activeTab === "أوقات العمل"}
          onClick={() => handleTabClick("أوقات العمل")}
        />
      </div>

      {/* Add more tabs as needed */}
      <div className={`${style.tabContent} pt-3 mt-4 p-3`}>
        {activeTab === "أسعار الخدمات" && (
          <>
            <Price /> <Price /> <Price />
          </>
        )}
        {activeTab === "أوقات العمل" && <Time/>}
        {/* Add more content for additional tabs */}
      </div>
    </div>
  );
};

export default TabMenu;
