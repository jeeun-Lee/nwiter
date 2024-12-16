import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbg2DKKk-2jadn4z64_o4_H9YwxlGy3VU",
  authDomain: "nwitter-reloaded-d323f.firebaseapp.com",
  projectId: "nwitter-reloaded-d323f",
  storageBucket: "nwitter-reloaded-d323f.firebasestorage.app",
  messagingSenderId: "888529502415",
  appId: "1:888529502415:web:f34f6ef7d28afbfb6937ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);