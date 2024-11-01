import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav({ menuVisible, setMenuVisible }) {
  return (
    <div className="nav">
      <div className="main-logo-container">
        <div className="main-logo">SF-Mark1</div>
      </div>
      <div className="nav-btn-container">
        <div className="nav-btn">About</div>
        <div className="nav-btn">Dashboard</div>
        <div className="nav-btn">Control</div>
        <div className="nav-btn">Diary</div>
        <div className="nav-btn">Contact</div>

        <div id="burger-menu-btn">
          <FontAwesomeIcon icon={faBars} size="2x" /> {/* 버거 아이콘 */}
        </div>
      </div>
    </div>
  );
}

export default Nav;
