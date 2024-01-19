import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTLjabRjgxJRMxHHHwtd2WwCxOz9WGwUM",
  authDomain: "weetask-46740.firebaseapp.com",
  projectId: "weetask-46740",
  storageBucket: "weetask-46740.appspot.com",
  messagingSenderId: "569793153202",
  appId: "1:569793153202:web:e8eca2774172270460e1ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
