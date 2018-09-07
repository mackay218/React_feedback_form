import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you being supported?</h2>

            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Support);