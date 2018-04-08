import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


const DefaultPageTemplate = ({children}) => 
          <div>
              <Header />
              {this.children}
              <Footer />
          </div>

/*
class DefaultPageTemplate extends Component {
    
    children;

    constructor({children}) {
        super();
        this.children = children;
    }

    render() {
        return (
          <div>
              <Header />
              {this.children}
              <Footer />
          </div>
        );
    }
}*/
 
export default DefaultPageTemplate;