import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return (
        <div className="sidebar">
            <ul className="list-group">
                <li className="list-group-item"><Link to="#">Bac 2</Link></li>
                <li className="list-group-item"><Link to="#">Bac 1</Link></li>
                <li className="list-group-item"><Link to="#">Common Core</Link></li>
            </ul>
        </div>
    );
    };
      
export default SideBar;
      