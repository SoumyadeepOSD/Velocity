import PropTypes from 'prop-types';
import firebase from "firebase/app"
import "firebase/auth"


const app = firebase.initializeApp({
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // eslint-disable-next-line no-undef
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // eslint-disable-next-line no-undef
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // eslint-disable-next-line no-undef
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // eslint-disable-next-line no-undef
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // eslint-disable-next-line no-undef
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // eslint-disable-next-line no-undef
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
});

app.propTypes = {
    process: PropTypes.object
  }