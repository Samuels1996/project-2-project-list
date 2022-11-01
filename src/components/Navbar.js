import React from 'react';
import '../index.scss'

function Navbar({ currentPage, handlePageChange}) {
    return (
        <div>
            <ul>
                <li className='nav-item'>
                    <p>Project 1</p>
                </li>
                <li className='nav-item'>
                    <p>Project 2</p>
                </li>
                <li className='nav-item'>
                    <p>Project 3</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;