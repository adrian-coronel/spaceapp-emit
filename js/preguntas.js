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

const contentElement = document.getElementById("content");

fetch('data/preguntas.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con el JSON en la variable "data"
    // console.log(data)
    data.forEach(data => {
      // console.log(data.viñetas)

      estructureViñetas = ""
      if (data.viñetas){
        data.viñetas.forEach(viñ =>{
        estructureViñetas += `<li>${viñ}</li>`
        })
      }
      // console.log(estructureViñetas)
      estructureQuestion = `
        <div id="questions">
          <div class="content-question">
            <div class="content-title">
              <h3>${data.pregunta}</h3>
            </div>
            <div class="content-answer d-none">
              <p>${data.respuesta}</p>
              <al>
                ${estructureViñetas} 
              </al>
            </div>
          </div>
        </div>
      `;
      console.log(estructureQuestion)
    
      contentElement.innerHTML+=estructureQuestion;
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
