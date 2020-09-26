import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar(){
  const location = useLocation();


return(
    <nav className="navbar navbar-expand-md navbar-light bg-light">

    <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
      <ul className="navbar-nav">
         
        <li className="nav-item">
          <Link to="/"  className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Search
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/saved" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} >Saved</Link>
        </li>
      </ul>
    </div>
  </nav>
)
}
export default Navbar