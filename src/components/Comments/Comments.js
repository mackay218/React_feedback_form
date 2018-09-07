import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    handleNext = (event) => {
        this.props.history.push('/success');
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>Any comments you want to leave?</h2>


                <button className="nextBtn" onClick={this.handleNext}>Submit</button>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Comments);