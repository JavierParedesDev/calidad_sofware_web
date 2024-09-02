document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario para validar primero

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple
        if (username === '' || password === '') {
            errorMessage.textContent = 'Por favor, complete todos los campos.';
            return;
        }

        // Validaciones adicionales (puedes personalizar según sea necesario)
        if (username.length < 5) {
            errorMessage.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
            return;
        }

        if (password.length < 8) {
            errorMessage.textContent = 'La contraseña debe tener al menos 8 caracteres.';
            return;
        }

        // Si todo está bien, puedes continuar con el proceso de login
        errorMessage.textContent = ''; // Limpiar mensaje de error
        alert('¡Inicio de sesión exitoso!'); // Aquí podrías redirigir a otra página o enviar la información al servidor
        // form.submit(); // Si deseas enviar el formulario después de la validación
    });
});
