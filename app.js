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
    }
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
function renderQuiz() {
  if (quizStart === false) {

  }

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
  renderQuiz();
  submitAnswer();
  handleScore();
  restartQuiz();
}