document.getElementById('loginform').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    let email = document.getElementById('username').value;
    let password = document.getElementById('password').value;
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
        // Aquí puedes agregar el código para enviar el formulario al servidor
        window.location.href = 'reservarparqueadero.html';
    }
});
