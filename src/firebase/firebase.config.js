import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASGjSb9qJWQPDItQWHMABX4Y632c7Z9C4",
  authDomain: "my-parents-52660.firebaseapp.com",
  projectId: "my-parents-52660",
  storageBucket: "my-parents-52660.appspot.com",
  messagingSenderId: "831761448817",
  appId: "1:831761448817:web:b837bb7bb896f4b5b780d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;