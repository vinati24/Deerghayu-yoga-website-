import firebase from 'firebase';

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCp4uUcXOgAlgdZkibnWS_obu2kNxhxbiM",
    authDomain: "deerghayu-fc3f7.firebaseapp.com",
    projectId: "deerghayu-fc3f7",
    storageBucket: "deerghayu-fc3f7.appspot.com",
    messagingSenderId: "223889539023",
    appId: "1:223889539023:web:444f8a9cb8a21751471cba",
    measurementId: "G-PXK5JXBMVM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
export default fire;