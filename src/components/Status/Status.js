import React, { Component } from 'react';
import { connect } from 'react-redux';


class Status extends Component {

    handleNext = (event) => {
        this.props.history.push('/understanding');
    }


    render(){

        return(

            <div className="viewContainer">
                <h2>How are you feeling?</h2>


                <button className="nextBtn" onClick={this.handleNext}>Next</button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Status);