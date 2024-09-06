// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqS3U1eAKmpQPvU5GFSH7NNaT85Um30lY",
  authDomain: "psychologists-services-a74ca.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-a74ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-a74ca",
  storageBucket: "psychologists-services-a74ca.appspot.com",
  messagingSenderId: "827850762894",
  appId: "1:827850762894:web:ab6ef632b708032f3277df",
  measurementId: "G-C8VRE474R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export async function getPsychologists() {
  const dbRef = ref(db);

  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    return error.message;
  }
}
