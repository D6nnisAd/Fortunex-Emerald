const firebaseConfig = {
  apiKey: "AIzaSyB2PwujzArL5Pie08mILe56dHnA5S6S4y8",
  authDomain: "fortunex-project.firebaseapp.com",
  projectId: "fortunex-project",
  storageBucket: "fortunex-project.firebasestorage.app",
  messagingSenderId: "108724314575",
  appId: "1:108724314575:web:7bbc082fc79ad01da2b2ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
window.db = firebase.firestore();