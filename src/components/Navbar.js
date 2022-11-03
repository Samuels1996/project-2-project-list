import React from "react";
import "../index.scss";

function Navbar({ currentPage, handlePageChange }) {
    return (
      <ul className="navbar">
        <li className="nav-item">
          <a href="#project1" onClick={() => handlePageChange("Project1")}>
            Project 1
          </a>
        </li>
        <li className="nav-item">
          <a href="#project2" onClick={() => handlePageChange("Project2")}>
            Project 2
          </a>
        </li>
        <li className="nav-item">
          <a href="#project3" onClick={() => handlePageChange("Project3")}>
            Project 3
          </a>
        </li>
      </ul>
    );
  }

export default Navbar;
