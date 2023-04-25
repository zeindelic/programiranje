const QUESTIONS = [
  {
    id: 1,
    question: "koja je najveca planina na svetu",
    answers: ["kilimanjaro", "Kopaonik", "Fudzi", "Mont Everest", "k2"],
    correctAnswer: "Mont Everest",
    points: 5,
  },
  {
    id: 2,
    question: "koliko minuta traje fudbalska utakmica?",
    answers: ["10", "20", "30", "90"],
    correctAnswer: "30",
    points: 5,
  },
  {
    id: 3,
    question: "koji od ovih je paran?",
    answers: ["25", "53", "109", "26", "505", "709"],
    correctAnswer: "26",
    points: 5,
  },
  {
    id: 4,
    question: "koji je najveci organ u ljudskom telu",
    answers: ["koza", "oko", "mozak", "srce", "jetra", "bubrezi"],
    correctAnswer: "koza",
    points: 5,
  },
  {
    id: 5,
    question: "koji puska moze da ubije u jednom pogodtku u cs:go",
    answers: ["CZ-75", "M249", "AWP", "M4A4", "NOVA"],
    correctAnswer: "AWP",
    points: 5,
  },
];

let CURRENT_POINTS = 0;
let indexStart = 0;
const maxPoints = QUESTIONS.reduce((prev, curr) => {
  return prev + curr.points;
}, 0);
const questionContainer = document.querySelector(".pitanje");
const answerContainer = document.querySelector(".odgovori");
const initializeQuiz = () => {
  let question = QUESTIONS[indexStart];

  if (indexStart < QUESTIONS.length) {
    questionContainer.textContent = question.question;

    question.answers.forEach((answer) => {
      const button = document.createElement("button");

      button.textContent = answer;

      button.onclick = () => {
        let question = QUESTIONS[indexStart];

        submitAnswer(question.id, button.textContent);

        indexStart++;
        console.log(indexStart);
        questionContainer.textContent = question.question;
        answerContainer.innerHTML = "";
        initializeQuiz();
      };
      answerContainer.appendChild(button);
    });
  } else {
    questionContainer.textContent = `kraj Kviza!!!! vas broj poena je bio ${CURRENT_POINTS} od ${maxPoints}`;
  }
};

const submitAnswer = (id, answer) => {
  const question = QUESTIONS[indexStart];
  if (question.id === id) {
    if (question.correctAnswer === answer) {
      CURRENT_POINTS += question.points;
      console.log(CURRENT_POINTS);
    }
  }
};

initializeQuiz();

// ///////// domaci///////////////
// kada se funkcija okine, treba da prebaci na sledece pitanje
// ukoliko je dati odgovor tacan, dodati korsniku onoliko poena koliko to pitanje Nosi,
// prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan!!!!!!!!!!!!!!///////////////
