const {initializeApp} = require('firebase/app')
const { getStorage, ref, getDownloadURL } = require("firebase/storage");


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyClYOkPugBFUZkFZ8LA9WXhYNA4cHo_gFE",
    authDomain: "bakery-8914b.firebaseapp.com",
    projectId: "bakery-8914b",
    storageBucket: "bakery-8914b.appspot.com",
    messagingSenderId: "918858921250",
    appId: "1:918858921250:web:5f32c32461d75e8746e17b",
    measurementId: "G-3CE411SV07"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// exports.storage = storage
// module.exports = storage

// getDownloadURL(ref(storage, 'bpcbgbeesroom.png'))
//   .then((url) => {

//     console.log(url)

//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log(error)
//   });


