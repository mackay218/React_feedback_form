import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Success extends Component {

    //function called when the next button is clicked
    handleNext = (event) => {
        this.props.history.push('/');
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>Thank You!</h2>


                <Button className="nextBtn" onClick={this.handleNext}>Leave New Feedback</Button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Success);