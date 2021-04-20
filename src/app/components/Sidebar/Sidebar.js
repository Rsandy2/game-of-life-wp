import React from "react";
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <a class = "sidebar-item" href="#">
        Game of Life
      </a>
      <a className="sidebar-item" href="#">
        Start
      </a>
      <a className="sidebar-item" href="#">
        Stop
      </a>
      <a className="sidebar-item" href="#">
        Increment by 1
      </a>
      <a className="sidebar-item" href="#">
        Increment by 23
      </a>
      <a className="sidebar-item" href="#">
        Reset
      </a>
      <a className="sidebar-item" href="#">
        Pattern 1
      </a>    
      <a className="sidebar-item" href="#">
        Pattern 2
      </a>  
      <a className="sidebar-item" href="#">
        Pattern 3
      </a>
    </div>
  );
};

export default Sidebar;
