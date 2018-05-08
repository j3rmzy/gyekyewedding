import React, { Component } from 'react';
import axios from '../../../axios/database';
import { firebase } from '../../../firebase';

import RSVPForm from '../../../components/RSVPForm/RSVPForm';
import Loading from '../../../components/Loading/Loading';
import Aux from '../../../hoc/Aux';
import withAuthorization from '../../../hoc/withAuthorization';

class DetailsPage extends Component {
    state = {
        users: {
            personOne: '',
            personTwo: '',
            inviteType: '',
            attendees: '',
            dietary: '',
            rsvp: false,
            details: []
        },
        selectedAttendees: [],
        error: null,
        sending: false,
        submitted: false
    }

    componentDidMount() {
        firebase.auth.currentUser.getIdToken(true)
            .then((token) => {
                const url = `${'/users/' + this.props.match.params.uid + '.json?auth=' + token}`;

                axios.get(url)
                    .then((res) => {
                        this.setState({
                            users: {
                                personOne: res.data.personOne,
                                personTwo: res.data.personTwo,
                                attendees: res.data.attendees,
                                rsvp: res.data.rsvp,
                                inviteType: res.data.inviteType
                            }
                        })
                    }).catch((error) => {
                        this.setState({
                            error: error
                        })
                    })
            })
    }

    updateRSVPFormHander = (event) => {
        const updatedRSVPForm = {
            ...this.state.users
        }

        updatedRSVPForm[event.target.name] = event.target.value;

        this.setState({
            users: {
                ...updatedRSVPForm
            }
        })
    }

    attendeesSelectionHandler = (event) => {
        const newSelection = event.target.value;
        let newSelectionArray;

        if (this.state.selectedAttendees.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedAttendees.filter((s) => {
                return s !== newSelection
            })
        } else {
            newSelectionArray = [...this.state.selectedAttendees, newSelection]
        }

        this.setState({
            selectedAttendees: newSelectionArray
        }, () => {
            console.log(this.state.selectedAttendees);
        });

    }

    onSubmitFormHandler = (event) => {
        event.preventDefault();

        this.setState({
            sending: true
        })

        firebase.auth.currentUser.getIdToken(true)
            .then((token) => {
                const url = `${'/users/' + this.props.match.params.uid + '.json?auth=' + token}`;
                const users = this.state.users;

                axios.put(url, users)
                    .then((res) => {
                        this.setState({
                            sending: false,
                            submitted: true
                        })
                    }).catch((error) => {
                        this.setState({
                            error: error.message
                        })
                    })

            })
    }

    render() {
        return (
            <Aux>
                {this.state.users.personOne ?
                <RSVPForm 
                    users={this.state.users}
                    updateFormInputs={this.updateRSVPFormHander}
                    selectedAttendees={this.state.selectedAttendees} 
                    attendeeSelection={this.attendeesSelectionHandler} />
                : <Loading />}
                
                {this.state.error ?
                <p>{this.state.error.message}</p>
                : null}

            </Aux>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition) (DetailsPage);