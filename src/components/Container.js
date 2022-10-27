import React, { useState } from "react";
import Projects1 from './pages/Projects1';


export default function ProjectContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
    return <Projects1 />;
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {handlePageChange}
            {renderPage()}
        </div>
    );
}
