import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../App.scss';
const st = classNames.bind(styles);

class Footer extends Component {
    render() {
        return (
          <footer className={st('container', 'py-5')}>
            <div className="row">
              <div className="col-12 col-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
              </div>
            </div>
        </footer>
        );
    }
}
 
export default Footer;