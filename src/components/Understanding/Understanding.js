import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you understanding the content?</h2>

            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Understanding);