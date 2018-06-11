import axios from 'axios';

var databaseURL = axios.create({
    baseURL: process.env.REACT_APP_FIREBASE_DB_URL
})

export default databaseURL;