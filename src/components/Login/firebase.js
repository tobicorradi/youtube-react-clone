import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyDFy9dPKzauYcBHAhd1-hi2V_gfI0cp1DY",
  authDomain: "react-clone-295320.firebaseapp.com",
  databaseURL: "https://react-clone-295320.firebaseio.com",
  projectId: "youtube-react-clone-295320",
  storageBucket: "youtube-react-clone-295320.appspot.com",
  messagingSenderId: "261110956967",
  appId: "1:261110956967:web:fbacad03170c1c3788ac82",
  measurementId: "G-DBC1HV8GTH",
});

export const auth = app.auth();
export default app;
