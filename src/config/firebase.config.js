import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMGzFKecegO_nlQCBT2O4_c414ODmUQZs",
  authDomain: "my-port-react.firebaseapp.com",
  projectId: "my-port-react",
  storageBucket: "my-port-react.appspot.com",
  messagingSenderId: "169271270916",
  appId: "1:169271270916:web:40fac590ec119ea7b69f51",
  measurementId: "G-ECNRQ5VH30"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
