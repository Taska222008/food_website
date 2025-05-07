const firebaseConfig = {
    apiKey: "AIzaSyCcZ2f3Xw-sOf2_iw-xbTm3KSt81KP7Szo",
    authDomain: "food-order-e3533.firebaseapp.com",
    databaseURL: "https://food-order-e3533-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "food-order-e3533",
    storageBucket: "food-order-e3533.firebasestorage.app",
    messagingSenderId: "967755168093",
    appId: "1:967755168093:web:e9eb5313743015663650b4"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const menuRef = db.collection("menu").doc("menu-2025");
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
