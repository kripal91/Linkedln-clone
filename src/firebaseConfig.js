// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiDW8j_4gbKees1M17ApEUIVzE5QsLcDY",
  authDomain: "linkedln-clone-9d71a.firebaseapp.com",
  projectId: "linkedln-clone-9d71a",
  storageBucket: "linkedln-clone-9d71a.appspot.com",
  messagingSenderId: "471173220484",
  appId: "1:471173220484:web:c04980498dd4b27fea9ad1",
  measurementId: "G-Z33MY47TGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);