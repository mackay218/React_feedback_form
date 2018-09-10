import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';


const emptyArr = [];

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});

class Admin extends Component{
   
    constructor(){
        super();

        this.state = {
            feedback: emptyArr,
            open: false,
        }
    }

    //GET all feedback
    getFeedBack = () => {
        console.log('in getFeedBack');
        axios({
            method: 'GET',
            url: '/feedback'
        })
        .then((response) => {
            console.log('got feedback:', response.data);
            this.setState({
                ...this.state,
                feedback: response.data,
            });
        })
        .catch((error) => {
            console.log('error getting feedback:', error);
            alert('error getting feedback');
        }); //end GET request
    };// end getFeedBack


    handleClick = () => {
        console.log('in handleClick');
        this.setState({ 
            ...this.state,
            open: true });
    };//end handleClick

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };//end handleClose

    deleteEntry = (event) => {
        console.log('entry to delete:', event.currentTarget.value);
        let entryId = event.currentTarget.value;
        axios({
            method: 'DELETE',
            url: '/feedback/' + entryId
        })
        .then((response) => {
            console.log('deleted entry:', entryId);
            //reload page
            this.getFeedBack();
            this.handleClose();
        })
        .catch((error) => {
            console.log('error deleting entry:', error);
        });//end DELETE request
    };// end deleteEntry

    //run getFeedBack when page loads
    componentDidMount(){
        this.getFeedBack();
    }

    render(){
        const { classes } = this.props;
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
                                        <td><Button onClick={this.handleClick} >Delete</Button></td>
                                        <Snackbar 
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                            ContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id">Delete feedback?</span>}
                                            action={[
                                            <Button value={entry.id} key="yes" color="secondary" size="small" onClick={this.deleteEntry}>
                                                Yes
                                            </Button>,
                                            <Button key="no" color="primary" size="small" onClick={this.handleClose}>
                                                No
                                            </Button>
                                            ]}
                                        />
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