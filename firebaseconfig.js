const firebaseConfig = {
    apiKey: "AIzaSyClKf8Dhu3QnW-Iu10OWSlqIsZdwqD7pMw",
    authDomain: "food-website-dfe05.firebaseapp.com",
    projectId: "food-website-dfe05",
    storageBucket: "food-website-dfe05.firebasestorage.app",
    messagingSenderId: "610197289987",
    appId: "1:610197289987:web:841bff353695b081de2236",
    measurementId: "G-CQKZ4KG8EL"
  };

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

function fetchMenu() {
    console.log('>>>> fetch menu')
    db.collection("menu").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });
}
fetchMenu()