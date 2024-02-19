import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAGHP8A89ZwVPfwctXdM53-WWkO0zcoG1Q",
  authDomain: "coffeandcode-92d9c.firebaseapp.com",
  projectId: "coffeandcode-92d9c",
  storageBucket: "coffeandcode-92d9c.appspot.com",
  messagingSenderId: "625912673785",
  appId: "1:625912673785:web:0f835090431716a0403928"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)