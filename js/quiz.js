const questions = [
    {
      question: "What is EMIT's mission?",
      options: ["Study asteroids", "Analyze dust transported from arid regions", "Observe planets"],
      answer: "Analyze dust transported from arid regions"
    },
    {
      question: "Where does the EMIT instrument operate?",
      options: ["On the Moon", "On the International Space Station (ISS)", "On an airplane"],
      answer: "On the International Space Station (ISS)"
    },
    {
      question: "How does EMIT use the imaging spectrometer?",
      options: ["To study the climate", "To study sunlight bouncing off Earth's minerals", "To study the atmosphere"],
      answer: "To study sunlight bouncing off Earth's minerals"
    },
    {
      question: "What type of information does each EMIT detector record?",
      options: ["1240 different parts", "Space temperature", "Wind speed"],
      answer: "1240 different parts"
    },
    {
      question: "Which greenhouse gases can EMIT detect?",
      options: ["Oxygen and nitrogen", "Carbon dioxide and oxygen", "Carbon dioxide and methane"],
      answer: "Carbon dioxide and methane"
    },
    {
      question: "What is one of the possible benefits of using EMIT's data?",
      options: ["Improving agricultural production", "Detecting natural hazards", "Controlling water pollution"],
      answer: "Detecting natural hazards"
    },
    // You can add more questions and answers here
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
  