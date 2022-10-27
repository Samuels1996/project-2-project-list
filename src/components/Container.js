import React, { useState } from "react";
import Projects from './pages/Projects';

export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
    return <Projects />;
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {handlePageChange}
            {renderPage()}
        </div>
    );
}
