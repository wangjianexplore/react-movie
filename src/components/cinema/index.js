import React from 'react';
import Header from '../header';
import Footer from '../footer';

class Cinema extends React.Component {
    render() {
        return(
            <div className="cinema">
                <Header title="影院"/>
                <Footer num="1"/>
            </div>
        );
    }
}

export default Cinema;