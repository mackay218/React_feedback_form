import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    //function called when the next button is clicked
    handleNext = (event) => {
        this.props.history.push('/support');
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you understanding the content?</h2>

                <button className="nextBtn" onClick={this.handleNext}>Next</button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Understanding);