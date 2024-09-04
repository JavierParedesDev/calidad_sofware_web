// service.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOq3ulbHKJ__KizdoIQffqmXub_UBkpQI",
  authDomain: "web1-6daa7.firebaseapp.com",
  projectId: "web1-6daa7",
  storageBucket: "web1-6daa7.appspot.com",
  messagingSenderId: "535907468468",
  appId: "1:535907468468:web:90e282f59a529f226643e1",
  measurementId: "G-4R63NZC6WN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia al servicio de autenticación
const auth = getAuth(app);

// Función para manejar el inicio de sesión
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuario autenticado:", user);
            window.location.href = 'productos.html'; // Redirigir a la página de inicio
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
            console.error("Error en la autenticación:", error);
        });
});
