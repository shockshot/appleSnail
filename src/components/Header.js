import React from 'react';
import { 
  // Button ,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  // NavLink,
  Collapse,
  NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

// https://reactstrap.github.io/components/navbar/ 
export default ({menus, userName, isMenuOpen, toggleMenu = f=>f}) => 
  <Navbar className="navbar-expand-lg">
    <div className="container">
      <NavbarBrand to="/" className="navbar-brand">Applesnail</NavbarBrand >
      <NavbarToggler onClick={toggleMenu} />
      
      <Collapse isOpen={isMenuOpen} navbar>
        <Nav className="mr-auto">
          {menus.map( ({menu, link}, i) => 
            <NavItem key={i}>
              <Link className="nav-link" to={link}>{menu}</Link>  
            </NavItem>
          )}
        </Nav>

        <div className="my-2 my-md-0">
          {userName}님
        </div>
      </Collapse>
      
    </div>
  </Navbar> 