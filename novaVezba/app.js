const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const radio1 = document.querySelector('#radio1')
const radio2 = document.querySelector('#radio2')
const radio3 = document.querySelector('#radio3')
const radio4 = document.querySelector('#radio4')
const quizQuestion = document.getElementById('quizQuestionsss')
const label1 = document.querySelector('#label1')
const label2 = document.querySelector('#label2')
const label3 = document.querySelector('#label3')
const label4 = document.querySelector('#label4')
const submit = document.querySelector('#submit') 
const all = document.querySelectorAll('.answer');
let pointCounter = 0
let counter = 0
submit.onclick = () =>{

    quizMaker()
    counter++
    console.log(counter);
    checker()
    console.log(pointCounter);

}



function quizMaker() {
    quizQuestion.textContent = quizData[counter].question
    label1.textContent = quizData[counter].a
    console.log(quizData[counter].a);
    label2.textContent = quizData[counter].b
    label3.textContent = quizData[counter].c
    label4.textContent = quizData[counter].d
    

    
}




function checker(){

all.forEach((el) =>{
    console.log(el.checked);
    if (el.checked === quizData[counter].correct) {
   
        pointCounter++
        
    }
})
   
}


