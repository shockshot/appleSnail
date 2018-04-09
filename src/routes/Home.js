import React, { Component } from 'react';
import DefaultPageTemplate from '../components/DefaultPageTemplate';

class Home extends Component {
    render() {
        return (
            <DefaultPageTemplate>
            {/* <main role="main"> */}
            
                <div className="container"> 
                contents<br />
                1<br />
                2<br />
                3<br />
                4<br />
            </div>
            {/* </main> */}

            </DefaultPageTemplate>
        );
    }
}
 
export default Home;
