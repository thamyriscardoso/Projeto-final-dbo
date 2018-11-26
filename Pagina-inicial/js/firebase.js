const firebase = require('firebase');
import {config} from './config.js';
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
export const DATABASE = firebase.database();
export const AUTH = firebase.auth();

