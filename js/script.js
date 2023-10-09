const questions = [
  {
    question: "¿Cuál es la misión de EMIT?",
    options: ["Estudiar asteroides", "Analizar el polvo transportado desde regiones áridas", "Observar planetas"],
    answer: "Analizar el polvo transportado desde regiones áridas"
},
{
    question: "¿Dónde opera el instrumento EMIT?",
    options: ["En la Luna", "En la Estación Espacial Internacional (ISS)", "En un avión"],
    answer: "En la Estación Espacial Internacional (ISS)"
},
{
    question: "¿Cómo utiliza EMIT el espectrómetro de imágenes?",
    options: ["Para estudiar el clima", "Para estudiar la luz del sol que rebota en los minerales de la Tierra", "Para estudiar la atmósfera"],
    answer: "Para estudiar la luz del sol que rebota en los minerales de la Tierra"
},
{
    question: "¿Qué tipo de información registra cada detector de EMIT?",
    options: ["1240 partes diferentes", "La temperatura del espacio", "La velocidad del viento"],
    answer: "1240 partes diferentes"
},
{
    question: "¿Qué gases de efecto invernadero puede detectar EMIT?",
    options: ["Oxígeno y nitrógeno", "Dióxido de carbono y oxígeno", "Dióxido de carbono y metano"],
    answer: "Dióxido de carbono y metano"
},
{
    question: "¿Cuál es uno de los posibles beneficios de utilizar los datos de EMIT?",
    options: ["Mejorar la producción agrícola", "Detectar peligros naturales", "Controlar la contaminación del agua"],
    answer: "Detectar peligros naturales"
},
  // Agrega más preguntas y respuestas aquí
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");
const correctAnswersElement = document.getElementById("correct-answers");

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";
  question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
      resultElement.textContent = "¡Respuesta correcta!";
      correctAnswers++;
      correctAnswersElement.textContent = correctAnswers;
  } else {
      resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + currentQuestion.answer;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  resultElement.textContent = "";
  nextButton.style.display = "none";
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
  } else {
      questionElement.textContent = "Fin del juego";
      optionsElement.innerHTML = "";
      nextButton.style.display = "none";
  }
});

showQuestion(questions[currentQuestionIndex]);
