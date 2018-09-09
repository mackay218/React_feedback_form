import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const emptyArr = [];

class Admin extends Component{
   
    constructor(){
        super();

        this.state = {
            feedback: emptyArr,
        }
    }

    //GET all feedback
    getFeedBack = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
            console.log('got feedback:', response.data);
            this.setState({
                feedback: response.data,
            });
        })
        .catch((error) => {
            console.log('error getting feedback:', error);
            alert('error getting feedback');
        })
    }

    componentDidMount(){
        this.getFeedBack();
        console.log('loaded admin page');
    }

    render(){

        return(

            <div className="viewContainer">
                <div className="tableContainer">
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.feedback.map((entry, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{entry.status_level}</td>
                                        <td>{entry.understanding_level}</td>
                                        <td>{entry.support_level}</td>
                                        <td>{entry.comments}</td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Admin);