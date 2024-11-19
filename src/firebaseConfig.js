import { initializeApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ8NMmgms7Xq7IHelIX94mjaZO7nkZrBU",
  authDomain: "store-phone-cf890.firebaseapp.com",
  projectId: "store-phone-cf890",
  storageBucket: "store-phone-cf890.firebasestorage.app",
  messagingSenderId: "605266480631",
  appId: "1:605266480631:web:70c48f554cb788143d72f2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore(app);

//login
export const onSingIn = async ({ email, password }) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.error(
      "Error al intentar iniciar sesión:",
      error.code,
      error.message
    );
    return { error };
  }
};

//logout
export const logOut = () => {
  try {
    signOut(auth);
    console.log("Sesión cerrada con exito");
  } catch (error) {
    console.log(error);
  }
};

//login con google
let googleProvider = new GoogleAuthProvider();
export const loginGoogle = async () => {
  try {
    const response = await signInWithPopup(auth, googleProvider);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//registro
export const singUp = async ({ email, password }) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

//olvide la contraseña

export const forgotPassword = async ({ email }) => {
  try {
    let response = await sendPasswordResetEmail(auth, email);
    return response;
  } catch (error) {
    console.log(error);
  }
};
