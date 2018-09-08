import React, { Component } from 'react';
import { connect } from 'react-redux';


class Success extends Component {

    //function called when the next button is clicked
    handleNext = (event) => {
        this.props.history.push('/');
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>Thank You!</h2>


                <button className="nextBtn" onClick={this.handleNext}>Leave New Feedback</button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Success);