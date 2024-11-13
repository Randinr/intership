import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPZ9njeXkGBCTf3tAcnA2IfbtNLZkg-_Q",
  authDomain: "delimajayagrup.firebaseapp.com",
  databaseURL: "https://delimajayagrup-default-rtdb.firebaseio.com",
  projectId: "delimajayagrup",
  storageBucket: "delimajayagrup.appspot.com",
  messagingSenderId: "646157367141",
  appId: "1:646157367141:web:0e96dafefa137b3c4a538c"
};

// Periksa apakah sudah ada app yang diinisialisasi, jika tidak maka inisialisasi baru
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
