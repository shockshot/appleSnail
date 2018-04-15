import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const menus = [
  {menu: '예약관리', link: '/reservation'},
  {menu: '매출관리', link: '/sales'},
  {menu: '고객관리', link: '/customer'},
  {menu: '샵관리', link: '/shop'},
  {menu: '로그아웃', link: '/login'},
]

const DefaultPageTemplate = ({children}) => 
<div>
  <Header menus={menus} userName="애플스네일"/>
  <main role="main">

    <div className="container">
      {children}
    </div>

  </main>
  <Footer/>
</div>

export default DefaultPageTemplate;