document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple
        if (username === '' || password === '') {
            Swal.fire({
            title: "Por favor, ingrese sus datos correctamente",
            icon: "error", 
            confirmButtonText: 'OK',
            customClass: {
                popup: 'responsive-swal',
            }
        });

            return; 
        }

        if (username.length < 5) {
           Swal.fire({
            title: "Por favor, ingrese sus datos correctamente",
            icon: "error", 
            confirmButtonText: 'OK',
            customClass: {
                popup: 'responsive-swal',
            }
        });

            
        }

        if (password.length < 8) {
          Swal.fire({
            title: "Por favor, ingrese sus datos correctamente",
            icon: "error", 
            confirmButtonText: 'OK',
            customClass: {
                popup: 'responsive-swal',
            }
        });

        }

        errorMessage.textContent = ''; 
        Swal.fire({
            title: '¡Inicio de sesión exitoso!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
       
    });
});
