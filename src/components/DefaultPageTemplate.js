import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DefaultPageTemplate = ({children}) => 
          <div>
              <Header />
              {this.children}
              <Footer />
          </div>

export default DefaultPageTemplate;