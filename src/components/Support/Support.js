import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

//object to hold local state/ single feedback item
const feedbackLevelObject = {
    understanding: '',
};

class Support extends Component {

    constructor() {
        super();

        this.state = feedbackLevelObject;
    }

    //function to set state to chosen radio button value
    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            support: event.target.value
        });

        console.log('previous state', this.state);
    }

    //function called when the next button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
       
        console.log('support submitted', this.state);

        //variable to hold action for redux store
        const action = { type: 'ADD_SUPPORT', payload: this.state }

        this.props.dispatch(action);

        this.props.history.push('comments');

        this.clearFields();
    }

    clearFields() {
        this.setState(feedbackLevelObject);
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>How well are you being supported?</h2>
                <form>
                    <div>
                        <i className="material-icons">mood_bad</i>
                        <input onChange={this.handleOptionChange}
                            value="1" checked={this.state.support === '1'}
                            type="radio" name="radioBtn" />
                        <input onChange={this.handleOptionChange}
                            value="2" checked={this.state.support === '2'}
                            type="radio" name="radioBtn" />
                        <input onChange={this.handleOptionChange}
                            value="3" checked={this.state.support === '3'}
                            type="radio" name="radioBtn" />
                        <input onChange={this.handleOptionChange}
                            value="4" checked={this.state.support === '4'}
                            type="radio" name="radioBtn" />
                        <input onChange={this.handleOptionChange}
                            value="5" checked={this.state.support === '5'}
                            type="radio" name="radioBtn" />
                        <i className="material-icons">mood</i>
                    </div>
                    <Button onClick={this.handleSubmit} className="nextBtn" >
                        Next
                        <i className="material-icons">forward</i>
                    </Button>
                </form>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Support);