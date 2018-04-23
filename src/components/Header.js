import React from 'react';
import { 
  Button ,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';

// https://reactstrap.github.io/components/navbar/ 
export default ({menus, userName}) => 
  <Navbar className="navbar-expand-lg">
    <div className="container">
      <NavbarBrand to="/" className="navbar-brand">Applesnail</NavbarBrand >
      
      <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>
      {/* <NavbarToggler onClick={this.toggle} /> */}

      
      <Collapse isOpen={true} navbar>
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