import React, { useState } from "react";
import Navbar from "./Navbar";
import Projects1 from "./pages/Project1";
import projectData1 from "../projectData/project1";
import projectData2 from "../projectData/project2";
import projectData3 from "../projectData/project3";

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Project3") {
      return <Projects1 projects={projectData3} name="pic" />;
    }
    if (currentPage === "Project2") {
      return <Projects1 projects={projectData2} name="pic" />;
    }
    return <Projects1 projects={projectData1} name="pic" />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
