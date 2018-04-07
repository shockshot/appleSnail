import React, { Component } from 'react';
import DefaultPageTemplate from '../components/DefaultPageTemplate';

class Home extends Component {
    render() {
        return (
            <DefaultPageTemplate>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
                <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    홈
                </div>
            </div>
            </DefaultPageTemplate>
        );
    }
}
 
export default Home;
