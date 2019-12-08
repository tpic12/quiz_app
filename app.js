/**
 * Example store structure
 */
'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    },
  ],
  questionNumber: 0,
  score: 0,
  quizStart: false,
};

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */

/**
  * This function renders the quiz after you start, ...
  * answer a question, or restart the quiz
  */
function renderStartQuiz() {
  const mainCard = 
    `<section class="main_card">
      <h2>Ready to Start?</h2>
      <button type='submit' id='start_quiz'>Let's Go</button>
    </section>`;

  $('.display').html(mainCard);
  
  $('.display').on('click', '#start_quiz', event => {
    event.preventDefault();
    STORE.quizStart = true;
    $('.main_card').children().remove();
    handleQuiz();
  });
}
/**
 * renders question one at a time depending on question number
 */
function renderQuestion() {
  const qCard = 
  `<h2>${STORE.questions[STORE.questionNumber].question}</h2>
  <form id="qForm">
      <input type='radio' name='answer' id='q1' value="${STORE.questions[STORE.questionNumber].answers[0]}"/><label for='q1' id='0'>${STORE.questions[STORE.questionNumber].answers[0]}</label>
      <input type='radio' name='answer' id='q2' value="${STORE.questions[STORE.questionNumber].answers[1]}"/><label for='q2' id='1'>${STORE.questions[STORE.questionNumber].answers[1]}</label><br>
      <input type='radio' name='answer' id='q3' value="${STORE.questions[STORE.questionNumber].answers[2]}"/><label for='q3' id='2'>${STORE.questions[STORE.questionNumber].answers[2]}</label>
      <input type='radio' name='answer' id='q4' value="${STORE.questions[STORE.questionNumber].answers[3]}"/><label for='q4' id='3'>${STORE.questions[STORE.questionNumber].answers[3]}</label><br>
  </form>
  <button type='submit' id='submit_answer'>Final Answer</button>`
  ;
  $('.main_card').html(qCard);

  $('.main_card').on('click', '#submit_answer', event =>{
    event.preventDefault();
    checkAnswer();
    STORE.questionNumber++;
    $('.main_card').children().remove();
    handleQuiz();
  });
}
/**
 * renders results page
 */
function renderResults(){

}
/**
 * this function checks the correctnes of the answer
 */
function checkAnswer() {
  let form = document.getElementById('qForm');
  let ans = form['answer'];
  for(let i=0; i<ans.length; i++){
    //is a button checked
    if (ans[i].checked) {
      console.log(ans[i].value);
      console.log(STORE.questions[STORE.questionNumber].correctAnswer);
      //compare value of ans[i] to correct answer
      if(ans[i].value === STORE.questions[STORE.questionNumber].correctAnswer){
        scoreKeeper();
      }
      else {
        console.log('boo, but you tried?');
        break;
      }
    }
  }
}
function scoreKeeper(){
  STORE.score++;
}
/**
 * This function submits the answer to score which
 * updates the render function to render a new question, cannot skip q's
 */
function submitAnswer() {

}
/**
 * This function keeps track of the score
 */
function handleScore() {

}
/**
 * This function restarts the quiz
 */
function restartQuiz() {

}
/**
 * this function calls all the other code
 */
function handleQuiz() {
  if (STORE.quizStart === false) {
    renderStartQuiz();
  }
  else {
    renderQuestion();
    handleScore();
    renderResults();
    restartQuiz();
  }
}

$(handleQuiz);