document.getElementById('registerform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let email = document.getElementById('username_regis').value;
    let password = document.getElementById('password_regis').value;
    let errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Limpiar mensajes de error previos

    // Validación del correo electrónico
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        let emailError = document.createElement('p');
        emailError.textContent = 'Por favor, ingrese un correo electrónico válido.';
        errorMessages.appendChild(emailError);
    }

    // Validación de la contraseña
    if (password.length < 8) {
        let passwordError = document.createElement('p');
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        errorMessages.appendChild(passwordError);
    }

    // Si ambos son válidos, proceder con el envío del formulario (o realizar otra acción)
    if (emailPattern.test(email) && password.length >= 8) {
        let registerSuccess = document.createElement('p');
        registerSuccess.textContent = 'Registro completado.';
        window.location.href = 'login-tuparqueadero.html';
    }
});
