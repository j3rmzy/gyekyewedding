import React, { Component } from 'react';
import axios from '../../../axios/database';
import { firebase, auth } from '../../../firebase';

import RSVPForm from '../../../components/RSVPForm/RSVPForm';
import ThanksPage from '../ThanksPage/ThanksPage';
import Loading from '../../../components/Loading/Loading';
import Aux from '../../../hoc/Aux';
import withAuthorization from '../../../hoc/withAuthorization';
import Error from '../../../components/Error/Error';

class DetailsPage extends Component {
    state = {
        users: {
            personOne: '',
            personTwo: '',
            inviteType: '',
            attendees: '',
            dietary: '',
            rsvp: false,
            selectedAttendees: []
        },
        error: null,
        sending: false,
        submitted: true
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
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
                                inviteType: res.data.inviteType,
                                selectedAttendees: res.data.selectedAttendees
                            }
                        })

                        for (const value in res.data.selectedAttendees) {
                            this.selectedCheckboxes.add(res.data.selectedAttendees[value]);
                        }

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

    attendeesSelectionHandler = (label) => {
        const newSelection = label;

        if (this.selectedCheckboxes.has(newSelection)) {
            this.selectedCheckboxes.delete(newSelection)
        } else {
            this.selectedCheckboxes.add(newSelection)
        }
    }

    goHomeHandler = () => {
        auth.doSignOut().then(() => {
            this.props.history.push('/');
        });
    }

    onSubmitFormHandler = (event) => {
        event.preventDefault();

        firebase.auth.currentUser.getIdToken(true)
            .then((token) => {
                const url = `${'/users/' + this.props.match.params.uid + '.json?auth=' + token}`;
                const users = {
                    ...this.state.users
                }

                if (users.rsvp === 'no') {
                    users['selectedAttendees'] = [];
                    this.selectedCheckboxes = [];
                } else {
                    users['selectedAttendees'] = [...this.selectedCheckboxes];
                }

                this.setState({
                    sending: true
                });

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
                {!this.state.submitted ? 
                    this.state.users.personOne ?
                        <RSVPForm 
                            submitForm={this.onSubmitFormHandler}
                            users={this.state.users}
                            updateFormInputs={this.updateRSVPFormHander}
                            attendeeSelection={this.attendeesSelectionHandler}
                            disabled={this.state.sending} />
                        : <Loading />
                    : <ThanksPage clicked={this.goHomeHandler} />
                }
                
                {this.state.error ?
                <Error error={this.state.error.message} />
                : null}

            </Aux>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition) (DetailsPage);