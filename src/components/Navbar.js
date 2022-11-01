import React from 'react';

function Navbar({ currentPage, handlePageChange}) {
    return (
        <div>
            <ul>
                <li>
                    <a href='#project1' onClick={() => handlePageChange('Project1')} 
                    className={currentPage === 'Project1' ? 'nav-link active' : 'nav-link'}> Project 1</a>
                </li>
                <li>
                    <a href='#project2' onClick={() => handlePageChange('Project2')}
                    className={currentPage === 'Project2' ? 'nav-link active' : 'nav-link'}> Project 2</a>
                </li>
                <li>
                    <a href='#project3' onClick={() => handlePageChange('Project3')}
                    className={currentPage === 'Project3' ? 'nav-link active' : 'nav-link'}> Project 3</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;