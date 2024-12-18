// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm');

//     const nom = document.getElementById('nom');
//     const prenom = document.getElementById('prenom');
//     const pseudo = document.getElementById('pseudo');
//     const email = document.getElementById('email');
//     const message = document.getElementById('message');
//     const checkbox = document.getElementById('checkbox');

//     const nomError = document.getElementById('nomError');
//     const prenomError = document.getElementById('prenomError');
//     const pseudoError = document.getElementById('pseudoError');
//     const emailError = document.getElementById('emailError');
//     const messageError = document.getElementById('messageError');
//     const checkboxError = document.getElementById('checkboxError');

//     function validateField(input, errorElement, validateFn) {
//         input.addEventListener('input', function () {
//             const isValid = validateFn(input.value);
//             if (isValid) {
//                 input.classList.remove('invalid');
//                 input.classList.add('valid');
//                 errorElement.textContent = '';
//             } else {
//                 input.classList.remove('valid');
//                 input.classList.add('invalid');
//                 errorElement.textContent = 'Ce champ est invalide';
//             }
//         });
//     }

//     function validateEmail(emailValue) {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(emailValue);
//     }

//     validateField(nom, nomError, value => value.trim() !== '');
//     validateField(prenom, prenomError, value => value.trim() !== '');
//     validateField(pseudo, pseudoError, value => value.trim() !== '');
//     validateField(email, emailError, validateEmail);
//     validateField(message, messageError, value => value.trim() !== '');

//     checkbox.addEventListener('change', function () {
//         if (checkbox.checked) {
//             checkbox.classList.remove('invalid');
//             checkbox.classList.add('valid');
//             checkboxError.textContent = '';
//         } else {
//             checkbox.classList.remove('valid');
//             checkbox.classList.add('invalid');
//             checkboxError.textContent = 'Vous devez accepter les termes';
//         }
//     });

//     form.addEventListener('submit', function (event) {
//         let isFormValid = true;

//         if (!nom.value.trim()) {
//             nom.classList.add('invalid');
//             nomError.textContent = 'Le nom ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!prenom.value.trim()) {
//             prenom.classList.add('invalid');
//             prenomError.textContent = 'Le prénom ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!pseudo.value.trim()) {
//             pseudo.classList.add('invalid');
//             pseudoError.textContent = 'Le pseudo ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!validateEmail(email.value)) {
//             email.classList.add('invalid');
//             emailError.textContent = 'L\'e-mail n\'est pas valide';
//             isFormValid = false;
//         }

//         if (!message.value.trim()) {
//             message.classList.add('invalid');
//             messageError.textContent = 'Le message ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!checkbox.checked) {
//             checkbox.classList.add('invalid');
//             checkboxError.textContent = 'Vous devez accepter les termes';
//             isFormValid = false;
//         }

//         if (!isFormValid) {
//             event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('myForm');



//     function validateEmail(emailValue) {
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return regex.test(emailValue);
//     }

//     validateField(nom, nomError, value => value.trim() !== '');
//     validateField(prenom, prenomError, value => value.trim() !== '');
//     validateField(pseudo, pseudoError, value => value.trim() !== '');
//     validateField(email, emailError, validateEmail);
//     validateField(message, messageError, value => value.trim() !== '');

//     checkbox.addEventListener('change', function () {
//         if (checkbox.checked) {
//             checkbox.classList.remove('invalid');
//             checkbox.classList.add('valid');
//             checkboxError.textContent = '';
//         } else {
//             checkbox.classList.remove('valid');
//             checkbox.classList.add('invalid');
//             checkboxError.textContent = 'Vous devez accepter les termes';
//         }
//     });

//     form.addEventListener('submit', function (event) {
//         let isFormValid = true;

//         if (!nom.value.trim()) {
//             nom.classList.add('invalid');
//             nomError.textContent = 'Le nom ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!prenom.value.trim()) {
//             prenom.classList.add('invalid');
//             prenomError.textContent = 'Le prénom ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!pseudo.value.trim()) {
//             pseudo.classList.add('invalid');
//             pseudoError.textContent = 'Le pseudo ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!validateEmail(email.value)) {
//             email.classList.add('invalid');
//             emailError.textContent = 'L\'e-mail n\'est pas valide';
//             isFormValid = false;
//         }

//         if (!message.value.trim()) {
//             message.classList.add('invalid');
//             messageError.textContent = 'Le message ne peut pas être vide';
//             isFormValid = false;
//         }

//         if (!checkbox.checked) {
//             checkbox.classList.add('invalid');
//             checkboxError.textContent = 'Vous devez accepter les termes';
//             isFormValid = false;
//         }

//         if (!isFormValid) {
//             event.preventDefault(); // Empêche l'envoi du formulaire si des erreurs sont présentes
//         }
//     });
// });

     const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const pseudo = document.getElementById('pseudo');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const checkbox = document.getElementById('checkbox');

    const nomError = document.getElementById('nomError');
    const prenomError = document.getElementById('prenomError');
    const pseudoError = document.getElementById('pseudoError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const checkboxError = document.getElementById('checkboxError');

    function validateField(input, errorElement, validateFn) {
        input.addEventListener('input', function () {
            const isValid = validateFn(input.value);
            if (isValid) {
                input.classList.remove('invalid');
                input.classList.add('valid');
                errorElement.textContent = '';
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
                errorElement.textContent = 'Ce champ est invalide';
            }
        });
    }