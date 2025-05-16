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
const menuRef = db.collection("menu").doc("menu_2024");
const orderRef = db.collection("order-list");

function getMenu() {
    return new Promise((resolve, reject) => {
        menuRef.get().then((res) => {
            console.log('>>> ', res.data())
            resolve(res.data());
        }).catch((err) => {
            reject(err)
        });
    }) 
}

function updateMenu() {
    menuRef.update(menu_2025).then((res) => {
        console.log('>>> update menu 2025', res)
    })
}
// updateMenu()

function placeOrderAPI(order) {
    return new Promise((resolve, reject) => {
        orderRef.add(order)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            resolve(docRef.id);
        })
        .catch((err) => {
            console.log('err', err)
            reject(err);
        })
    })
}

function fetchOrderDetails(docId) {
    return new Promise((resolve, reject) => {
        orderRef.doc(docId).get().then((res) => {
            console.log('>>> ', res.data())
            resolve(res.data());
        }).catch((err) => {
            reject(err)
        });
    }) 
};
