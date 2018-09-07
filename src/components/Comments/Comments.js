import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    render() {

        return (

            <div className="viewContainer">
                <h2>Any comments you want to leave?</h2>

            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Comments);