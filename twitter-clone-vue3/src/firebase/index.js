// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDY33HSoR0Ar8HFNj9F17VPE8LCzlteIU4",
    authDomain: "twitter-clone-vue3-b847d.firebaseapp.com",
    projectId: "twitter-clone-vue3-b847d",
    storageBucket: "twitter-clone-vue3-b847d.appspot.com",
    messagingSenderId: "314529474995",
    appId: "1:314529474995:web:b16257eef8f0ee31b1c3c6"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const USER_COLLECTION = db.collection('users')
export const TWEET_COLLECTION = db.collection('tweets')
export const COMMENT_COLLECTION = db.collection('comments')
export const RETWEET_COLLECTION = db.collection('retweets')
export const LIKE_COLLECTION = db.collection('likes')
export const MESSAGE_COLLECTION = db.collection('messages')
