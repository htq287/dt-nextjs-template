import React from 'react';
import { connect } from 'react-redux';
import Home from './home'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}

export default connect(state => state)(Index);