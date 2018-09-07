import React, { Component } from 'react';
import { connect } from 'react-redux';


class Success extends Component {

    render() {

        return (

            <div className="viewContainer">
                <h2>Thank You!</h2>

            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Success);