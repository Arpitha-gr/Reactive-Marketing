import React from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul>
           <li><Link to='/'>DASHBOARD</Link></li>
           <li><Link to='form-builder'>FORM BUILDER</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar