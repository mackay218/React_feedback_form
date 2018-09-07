import React, { Component } from 'react';
import { connect } from 'react-redux';


class Status extends Component {

    render(){

        return(

            <div className="viewContainer">
                <h2>How are you feeling?</h2>

            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Status);