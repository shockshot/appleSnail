import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../App.scss';
const st = classNames.bind(styles);

class Header extends Component {
    static TopMenus = [
      {menu: '홈', link: '/'},
      {menu: '예약관리', link: '/reservation'},
      {menu: '매출관리', link: '/sales'},
      {menu: '고객관리', link: '/customer'},
      {menu: '샵관리', link: '/shop'},
      {menu: '로그아웃', link: '/login'},
    ]
  

    render() {
        return (
          <nav className={st('site-header', 'sticky', 'py-1')}>
              <div className={st('container', 'd-flex', 'flex-column', 'flex-md-row', 'justify-content-between')}>
                <a className="py-2" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mx-auto">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                    <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                    <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                    <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                    <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                    <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
                  </svg>
                </a>
                {Header.TopMenus.map( ({menu, link}, i) => 
                  <Link className={st('py-2', 'd-none', 'd-md-inline-block')} to={link} key={i}>{menu}</Link>  
                )}
              </div>
            </nav>


        );
    }
}
 
export default Header;