import React, { Component } from 'react';
import { connect } from 'react-redux';


class Admin extends Component{

    render(){

        return(

            <div className="viewContainer">
            
            </div>

        )

    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Admin);