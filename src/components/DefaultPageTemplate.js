import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultPageTemplate = ({children}) => 
<div>
  <Header/>
  <main role="main">

    <div className="container">
      {children}
    </div>

  </main>
  <Footer/>
</div>

export default DefaultPageTemplate;