import React, { Component } from 'react';
import { connect } from 'react-redux';

//object to hold local state/ single feedback item
const feedbackLevelObject = {
    feeling: '',
}; 


class Status extends Component {

    constructor(){
        super();

        this.state= feedbackLevelObject;
    }

    //function to set state to chosen radio button value
    handleOptionChange = (event) => {
        console.log('in handleOptionChange');
        this.setState({
            ...this.state,
            feeling: event.target.value
        });

        console.log('previous state', this.state);
    } 

    //function called when the next button is clicked
    handleSubmit = (event) => {
        event.preventDefault();
        //this.props.history.push('/understanding');
        console.log('feeling submited', this.state);

        //variable to hold action for redux store
        const action = { type: 'ADD_FEELING', payload: this.state}
        
        this.props.dispatch(action);

        //this.props.history('understanding');

        this.clearFields();
    }

    clearFields() {
        this.setState(feedbackLevelObject);
    }

    render(){

        return(

            <div className="viewContainer">
                <h2>How are you feeling?</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleOptionChange} 
                        value="1" checked={this.state.feeling === '1'} 
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="2" checked={this.state.feeling === '2'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="3" checked={this.state.feeling === '3'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="4" checked={this.state.feeling === '4'}
                        type="radio" name="radioBtn" />
                    <input onChange={this.handleOptionChange}
                        value="5" checked={this.state.feeling === '5'}
                        type="radio" name="radioBtn" />    
                    <button className="nextBtn" >Next</button>
                </form>
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Status);