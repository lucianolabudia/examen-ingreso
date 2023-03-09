document.addEventListener('DOMContentLoaded', () => {

    const request = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    // Seleccionar los elementos de la interfaz
    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputSubject = document.querySelector('#subject');
    const inputMessage = document.querySelector('#message');
    const form = document.querySelector('#form');
    const btnSubmit = document.querySelector('#form button[type="submit"]');

    // Asignar eventos
    inputName.addEventListener('input', valitador);
    inputEmail.addEventListener('input', valitador);
    inputSubject.addEventListener('input', valitador);
    inputMessage.addEventListener('input', valitador);

    function valitador(e) {
        if (e.target.value.trim() === '') {
            showAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            request[e.target.name] = '';
            checkRequest();    
            return;
        }

        if (e.target.id === 'email' && !validateEmail(e.target.value)) {
            showAlert('El email no es valido', e.target.parentElement);
            request[e.target.name] = '';
            checkRequest();
            return;
        }       
        
        clearAlert(e.target.parentElement);

        // Asignar los valores
        request[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de solicitud
        checkRequest();
    }

    function showAlert(message, reference) {

        clearAlert(reference);

        // Generar alerta en HTML
        const error = document.createElement('p');
        error.textContent = message;
        error.classList.add('error-message');

        // Inyectar el error al formulario
        reference.appendChild(error);
    }

    function clearAlert(reference) {
        // Comprueba si ya existe una alerta
        const alert = reference.querySelector('.error-message');
        if (alert) {
            alert.remove();
        } 
    }

    function validateEmail(email) {        
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const result = regex.test(email);
    }

    function checkRequest() {
        if (Object.values(email).includes('')) {
            btnSubmit.disabled = true;
            return;
        }
        btnSubmit.disabled = false;
    }
})