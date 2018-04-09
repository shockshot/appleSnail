import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    static TopMenus = [
      {menu: '예약관리', link: '/reservation'},
      {menu: '매출관리', link: '/sales'},
      {menu: '고객관리', link: '/customer'},
      {menu: '샵관리', link: '/shop'},
      {menu: '로그아웃', link: '/login'},
    ]
  

    render() {
        return (
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand"><Link to="/">Applesnail</Link></a>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                  {Header.TopMenus.map( ({menu, link}, i) => 
                    <li className="nav-item" key={i}>
                      <Link className="nav-link" to={link}>{menu}</Link>  
                    </li>
                  )}
                </ul>

                <div className="my-2 my-md-0">
                  애플스네일님
                </div>
              </div>
            </div>
          </nav>
        );
    }
}
 
export default Header;