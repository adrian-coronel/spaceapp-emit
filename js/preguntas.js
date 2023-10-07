// // Obtenemos todos los elementos con la clase "content-title"
// const titleElements = document.querySelectorAll('.content-title');



// // Iteramos sobre los elementos y agregamos un evento clic a cada uno
// titleElements.forEach(element => {
//     element.addEventListener('click', () => {
//         // Obtenemos el icono dentro del elemento clicado
//         const icon = element.querySelector('i');
//         const answer = element.nextElementSibling;

//         iconIsClosed = icon.classList.contains('bx-chevron-right');
//         answerIsNone = answer.classList.contains('d-none')
//         // Verificamos la clase actual del icono y la cambiamos
      
//         if (iconIsClosed && answerIsNone) {
//             icon.classList.remove('bx-chevron-right');
//             answer.classList.remove('d-none')
//             icon.classList.add('bx-chevron-down');
//         } else {
//             icon.classList.remove('bx-chevron-down');
//             icon.classList.add('bx-chevron-right');
//             answer.classList.add('d-none')
//         }
//     });
// });