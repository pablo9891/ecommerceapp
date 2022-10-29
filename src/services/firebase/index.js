import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOPeGj7rW_gWGlcisLxgmu3LCbha3D5C4",
  authDomain: "db-ecommerce-coder.firebaseapp.com",
  projectId: "db-ecommerce-coder",
  storageBucket: "db-ecommerce-coder.appspot.com",
  messagingSenderId: "540059544289",
  appId: "1:540059544289:web:54cc675f4e7bc90c8425a0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);