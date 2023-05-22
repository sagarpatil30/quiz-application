const quizData = [
    {
        question: 'Which Language runs in a Web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd',
    },
    {
        question: 'Which type of language is Javascript?',
        a: ' Programming',
        b: 'Scripting',
        c: 'Markup',
        d: 'None of the above',
        correct: 'b',
    },
    {
        question: 'Which tag is used to create a hyperlink?',
        a: '<a>',
        b: '<img>',
        c: '<dl>',
        d: '<p>',
        correct: 'a',
    },
      {
        question: 'HTML stands for',
        a: 'Hyper Text Modul Language',
        b: 'Hyper Text Mark Language',
        c: 'Hyper Text Markup Language',
        d: 'Hyperlink Markup Language',
        correct: 'c',
    },
]

const quiz=document.getElementById('quiz')
const answerEls=document.querySelectorAll('.answer')
const questionEl=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const sumbitBtn=document.getElementById('sumbit')

let currentQuiz=0
let score=0

loadquiz()

function loadquiz(){

    deselectAnswers()

const currentQuizData = quizData[currentQuiz]

questionEl.innerText=currentQuizData.question
a_text.innerText=currentQuizData.a
b_text.innerText=currentQuizData.b
c_text.innerText=currentQuizData.c
d_text.innerText=currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

sumbitBtn.addEventListener('click',()=>{
    const answer =getSelected()
   if(answer){
    if(answer=== quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    if(currentQuiz< quizData.length){
        loadquiz()
    }
    else{
        quiz.innerHTML=`<h2> You answered  ${score}/${quizData.length} questions correctly </h2>
        <button onclick="location.reload()">Reload</button>
        `
    }
   }
})