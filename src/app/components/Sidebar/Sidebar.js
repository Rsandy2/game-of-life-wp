import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <a href="#">Game of Life</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Start</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Stop</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Increment by 1</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Increment by 23</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Reset</a>
      </div>
      <div className="sidebar-item">
        <a href="#">Pattern 1</a>
      </div>      <div className="sidebar-item">
        <a href="#">Pattern 2</a>
      </div>      <div className="sidebar-item">
        <a href="#">Pattern 3</a>
      </div>
    </div>
  );
};

export default Sidebar;
