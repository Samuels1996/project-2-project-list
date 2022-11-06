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
      return <Projects projects={projectData3} name="pic" />;
    }
    if (currentPage === "Project2") {
      return <Projects projects={projectData2} name="pic" />;
    }
    return <Projects projects={projectData1} name="pic" />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
