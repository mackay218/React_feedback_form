import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    handleNext = (event) => {
        this.props.history.push('/comments');
    }


    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you being supported?</h2>


                <button className="nextBtn" onClick={this.handleNext}>Next</button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Support);