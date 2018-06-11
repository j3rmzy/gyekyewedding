import React, { Component } from 'react';
import axios from '../../../axios/database';
import { firebase } from '../../../firebase';
import ReactTable from 'react-table';

import 'react-table/react-table.css';
import './ListPage.scss';

import withAuthorization from '../../../hoc/withAuthorization';

const columns = [
    {
        Header: "Person One",
        accessor: "personOne"
    },{
        Header: "Person Two",
        accessor: "personTwo"
    },{
        Header: "Type",
        accessor: "inviteType"
    },{
        Header: "RSVP",
        accessor: "rsvp"
    },{
        Header: "Selected Attendees",
        accessor: "selectedAttendees"
    },{
        Header: "Dietary",
        accessor: "dietary"
    }
]

class ListPage extends Component {
    state = {
        users: [],
        loading: true
    }

    componentDidMount() {
        firebase.auth.currentUser.getIdToken(true)
            .then((token) => {
                const url = '/users.json?auth=' + token;

                axios.get(url)
                    .then((res) => {
                        const data = res.data;
                        const fetchUsers = [];

                        for (let key in data) {
                            fetchUsers.push({
                                ...data[key],
                                id: key
                            })
                        }

                        this.setState({
                            loading: false,
                            users: fetchUsers
                        })

                    })
                    .catch((error) => {
                        console.error(error.message);
                        this.setState({
                            loading: false
                        })
                    })
            })
    }

    render() {
        return (
            <ReactTable
                data={this.state.users}
                columns={columns} 
            />
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition) (ListPage);