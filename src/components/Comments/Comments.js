import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.props.reduxState.feedBackInfo, comments: 'unknown'
        }
    }

    //function to set state to chosen radio button value
    handleChange = (event) => {
        console.log('in handleChange');
        this.setState({
            ...this.state,
            comments: event.target.value
        });

        console.log('previous state', this.state);
    } 

    //function called when the next button is clicked
    handleSubmit = (event) => {
        event.preventDefault();

        console.log('comments submitted', this.state);

        //variable to hold action for redux store
        const action = { type: 'ADD_COMMENTS', payload: this.state }

        this.props.dispatch(action);

        //POST feedback data to database
        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        })
        .then((response) => {
            console.log('back from POST:', response.data);
            const action = {type: 'EMPTY_INFO'}
            this.props.dispatch(action);
            this.props.history.push('success');
            this.clearFields();
        })
        .catch((error) => {
            console.log('error posting feedback to database:', error);
            alert('error posting feedback to database');
        });

    }

    clearFields() {
        this.setState({});
    }

    render() {

        return (

            <div className="viewContainer">
                <h2>Any comments you want to leave?</h2>
                <form onSubmit={this.handleSubmit}>
                    <textarea onChange={this.handleChange}/>
                    <button className="nextBtn" >Submit</button>
                </form>   
            </div>

        )

    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Comments);