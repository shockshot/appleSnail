import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

 
export default ({menus, userName}) => 
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link to="/" className="navbar-brand">Applesnail</Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav mr-auto">
        {menus.map( ({menu, link}, i) => 
          <li className="nav-item" key={i}>
            <Link className="nav-link" to={link}>{menu}</Link>  
          </li>
        )}
      </ul>

      <div className="my-2 my-md-0">
        {userName}님
      </div>
    </div>
  </div>
</nav>