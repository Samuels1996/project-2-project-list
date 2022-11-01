import React, { useNavigate, useState } from "react";
import Navbar from './Navbar';
import Projects1 from "./pages/Projects1";
import Projects2 from "./pages/Project2";

export default function ProjectContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === 'Projects2') {
      return <Projects2 />;
    }
    return <Projects1 />;
  };

  const handlePageChange = (page) => setCurrentPage(page);




  return (
    <div>
      <Navbar  currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

