
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC-plKIFmKPQZgDM5CdUeuYM-8fLw514mE",
  authDomain: "electrical-galaxy.firebaseapp.com",
  projectId: "electrical-galaxy",
  storageBucket: "electrical-galaxy.appspot.com",
  messagingSenderId: "675128261546",
  appId: "1:675128261546:web:6d2bbf9fdac85bfab809d3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;