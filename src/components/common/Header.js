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
  <Navbar className="navbar-expand-lg text-white" color="info" dark>
    <div className="container">
      <NavbarBrand to="/" className="navbar-brand">Applesnail</NavbarBrand >
      <NavbarToggler onClick={toggleMenu} />
      
      <Collapse isOpen={isMenuOpen} navbar>
        <Nav className="mr-auto">
          {menus.map( ({menu, link}, i) => 
            <NavItem key={i}>
              <Link className="nav-link text-white" to={link}>{menu}</Link>  
            </NavItem>
          )}
        </Nav>

        <Nav>
          <NavItem>
            <Link className="nav-link text-white" to='#'>
            {userName}님
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link text-white" to='/login'>로그아웃</Link>  
          </NavItem>
        </Nav>
      </Collapse>
      
    </div>
  </Navbar> 