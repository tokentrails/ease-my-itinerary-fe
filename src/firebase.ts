// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";
import type { Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsDvGn7MRCMTqlSSYtSJxmTO5PF0RF2WY",
  authDomain: "tokentrails-5b1ff.firebaseapp.com",
  projectId: "tokentrails-5b1ff",
  storageBucket: "tokentrails-5b1ff.firebasestorage.app",
  messagingSenderId: "1026450942755",
  appId: "1:1026450942755:web:a30ef6be22592971b07a96",
  measurementId: "G-3BEHWV1VE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
let analytics: Analytics | null = null;

// Check if we're in a browser environment
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Helper function to log events
export const logEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    firebaseLogEvent(analytics, eventName, eventParams);
  }
};

export { analytics };
export default app;
