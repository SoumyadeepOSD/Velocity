import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDxwRpjLlzROKkS2s0-BzNCIhnGRRhTDJc",
  authDomain: "velocity-1d73c.firebaseapp.com",
  projectId: "velocity-1d73c",
  storageBucket: "velocity-1d73c.appspot.com",
  messagingSenderId: "27151381615",
  appId: "1:27151381615:web:8cca23c50758d22324499a",
  measurementId: "G-7GGBF26F00"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
