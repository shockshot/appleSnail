import React from 'react';
import { 
  // Button ,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  // NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  // ButtonDropdown
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { history } from 'helpers';

const linkHandler = (link) => (e) => history.push(link);

const MenuItem = ({menu, link, children}) => children ? (
    <UncontrolledDropdown nav inNavbar>
      {/* <Link className="dropdown-toggle nav-link text-white" to={link}>{menu}</Link> */}
      <DropdownToggle nav caret className="text-white">
        {menu}
      </DropdownToggle>
      <DropdownMenu right>
        {children.map( (item, j) =>
          <DropdownItem key={j} onClick={linkHandler(item.link)}>
            {item.menu}
            {/* <Link className="nav-link text-white" to={item.link}>{item.menu}</Link>   */}
          </DropdownItem>
        )}
      </DropdownMenu>
    </UncontrolledDropdown>
  ) : (
    <NavItem>
      <Link className="nav-link text-white" to={link}>{menu}</Link>  
    </NavItem>
  )


// https://reactstrap.github.io/components/navbar/ 
const Header = ({menus, userName, isMenuOpen, toggleMenu = f=>f}) => 
  <Navbar className="navbar-expand-lg text-white" color="info" dark>
    <div className="container">
      <NavbarBrand to="/" className="navbar-brand">Applesnail</NavbarBrand >
      <NavbarToggler onClick={toggleMenu} />
      
      <Collapse isOpen={isMenuOpen} navbar>
        <Nav className="mr-auto">
          {menus.map( (item, i) => 
            <MenuItem menu={item.menu} link={item.link} children={item.children} key={i}/>
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

  export default Header;