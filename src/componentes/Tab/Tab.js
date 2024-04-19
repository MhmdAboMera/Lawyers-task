import React from "react";
import style from "./Tab.module.css";
const Tab = ({ label, activeMenu, onClick }) => {
  return (
    <div
      className={`tab ${style.TabContant} ${activeMenu ? "activeMenu" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default Tab;
