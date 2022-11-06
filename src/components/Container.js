import React, { useState } from "react";
import Navbar from "./Navbar";
import Projects from "./pages/Projects";
import projectData1 from "../projectData/project1";
import projectData2 from "../projectData/project2";
import projectData3 from "../projectData/project3";

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Project3") {
      return <Projects projects={projectData3} />;
    }
    if (currentPage === "Project2") {
      return <Projects projects={projectData2} />;
    }
    return <Projects projects={projectData1} />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
