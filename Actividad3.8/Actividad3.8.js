// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el formulario y el mensaje de éxito para manipularlos más adelante
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    // Agrega un evento al formulario para capturar cuando se envía
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        // Lista de IDs de los campos del formulario que se van a validar
        const fields = ['nom', 'email', 'assumpte', 'consulta'];
        let isValid = true; // Variable para determinar si el formulario es válido

        // Oculta todos los mensajes de error antes de validar
        document.querySelectorAll('.error').forEach(el => el.style.display = 'none');

        // Bucle para validar cada campo del formulario
        fields.forEach(field => {
            const value = document.getElementById(field).value.trim(); // Obtiene el valor del campo eliminando espacios en blanco
            const errorElement = document.getElementById(`error${field.charAt(0).toUpperCase() + field.slice(1)}`); // Busca el elemento de error asociado

            // Verifica si el campo está vacío o si el email no tiene un formato válido
            if (!value || (field === 'email' && !/^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(value))) {
                errorElement.style.display = 'block'; // Muestra el mensaje de error correspondiente
                isValid = false; // Marca el formulario como inválido
            }
        });

        // Si todas las validaciones pasan (isValid sigue siendo true)
        if (isValid) {
            contactForm.reset(); // Reinicia el formulario (borra los campos)
            successMessage.style.display = 'block'; // Muestra el mensaje de éxito

            // Oculta el mensaje de éxito después de 5 segundos
            setTimeout(() => successMessage.style.display = 'none', 5000);
        }
    });
});