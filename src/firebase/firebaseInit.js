import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
        apiKey: "AIzaSyAWj01JnHz5fbdxt9JzxNMqmXQ6bGOBIvQ",
        authDomain: "zapocet-blog.firebaseapp.com",
        projectId: "zapocet-blog",
        storageBucket: "zapocet-blog.appspot.com",
        messagingSenderId: "486061477058",
        appId: "1:486061477058:web:9233961f992d1ac7c3bf5b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
