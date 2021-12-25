import React from "react";
import {Link} from 'react-router-dom';

const Header=()=>{
  return(
    <div className="Header">
      <Link to="/">
        Home
      </Link>
      <Link to="/flash-card">
        Flash Card
      </Link>
      <Link to="/manage-card">
        Manage Card
      </Link>
    </div>
  )
}

export default Header;