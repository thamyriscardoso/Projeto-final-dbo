const firebase = require('firebase');
import {config} from './config.js';

firebase.initializeApp(config);

export const db = firebase.database();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
