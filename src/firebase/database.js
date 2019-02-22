import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.firestore();

const orderCollection = database.collection('orders');

const inquiryCollection = database.collection('inquiries');

export { orderCollection, inquiryCollection };
