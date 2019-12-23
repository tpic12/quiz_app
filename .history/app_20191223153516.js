/**
 * Example store structure
 */
'use strict';

const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many items in a bakers dozen??',
      answers: ['11', '12', '13', '3'],
      correctAnswer: '13'
    },
    {
      question: 'What month is Oktoberfest held?',
      answers: ['September', 'October', 'Every Month', 'August'],
      correctAnswer: 'September'
    },
    {
      question: 'What color is an Orange Blossom?',
      answers: ['Red', 'Orange', 'Pink', 'White'],
      correctAnswer: 'White'
    },
    {
      question: 'Where did the Panama Hat originate?',
      answers: ['Ecuador', 'Panama', 'China', 'Cuba'],
      correctAnswer: 'Ecuador'
    },
    {
      question: 'What are toy marbles made from?',
      answers: ['Plastic', 'Quartz', 'Diamond', 'Glass'],
      correctAnswer: 'Glass'
    },
    {
      question: 'How many gallons are in a ten-gallon hat?',
      answers: [
        'Half a Gallon',
        'Ten-Gallons',
        'Three-Fourths of a Gallon',
        'Give-Gallon'
      ],
      correctAnswer: 'Three-Fourths of a Gallon'
    },
    {
      question: 'What is the biggest animal to ever live?',
      answers: ['Mammoth', 'T-Rex', 'Blue Whale', 'Brontosaurus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'Where is the red-bellied woodpecker predominately red?',
      answers: ['Head', 'Wings', 'Feet', 'Belly'],
      correctAnswer: 'Head'
    }
  ],
  questionNumber: 0,
  score: 0,
  quizStart: false
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
  const mainCard = `<section class="main_card">
      <h2>Ready to Start?</h2>
      <button type='submit' id='start_quiz'>Let's Go</button>
    </section>`;

  $('.display').html(mainCard);

  $('.display').on('click', '#start_quiz', function(event) {
    event.preventDefault();
    STORE.quizStart = true;
    $('.main_card')
      .children()
      .remove();
    handleQuiz();
  });
}
/**
 * renders question one at a time depending on question number
 */
function renderQuestion() {
  if (
    STORE.questionNumber === STORE.questions.length &&
    STORE.questionNumber > 1
  ) {
    renderResults();
  } else {
    const qCard = `<h2>${STORE.questions[STORE.questionNumber].question}</h2>
    <form id="qForm">
        <input type='radio' name='answer' id='q1' value="${
          STORE.questions[STORE.questionNumber].answers[0]
        }"/><label for='q1' id='0'>${
      STORE.questions[STORE.questionNumber].answers[0]
    }</label>
        <input type='radio' name='answer' id='q2' value="${
          STORE.questions[STORE.questionNumber].answers[1]
        }"/><label for='q2' id='1'>${
      STORE.questions[STORE.questionNumber].answers[1]
    }</label><br>
        <input type='radio' name='answer' id='q3' value="${
          STORE.questions[STORE.questionNumber].answers[2]
        }"/><label for='q3' id='2'>${
      STORE.questions[STORE.questionNumber].answers[2]
    }</label>
        <input type='radio' name='answer' id='q4' value="${
          STORE.questions[STORE.questionNumber].answers[3]
        }"/><label for='q4' id='3'>${
      STORE.questions[STORE.questionNumber].answers[3]
    }</label><br>
    </form>
    <button type='submit' id='submit_answer'>Final Answer</button>`;

    $('.main_card').html(qCard);
    $('input:checked').on('su');
    $('.main_card').on('click', '#submit_answer', function(event) {
      event.preventDefault();
      checkAnswer();
      //original next question spot

      $('.main_card')
        .children()
        .remove();

      handleQuiz();
    });
  }
}
/**
 * renders results page
 
 */

function generateResults(finalScore, numberOfQuestions) {
  return `<h2>You scored ${finalScore} out of ${numberOfQuestions}!</h2><button id='restart'>Restart Quiz</button>`;
}

/* Render results element with button that restarts the quiz*/
function renderResults() {
  let score = STORE.score;
  let num = STORE.questionNumber;

  $('.main_card').html(generateResults(score, num));
  $('#restart').click(function(event) {
    event.preventDefault();
    console.log('Restarting Quiz');
    STORE.questionNumber = 0;
    STORE.score = 0;

    renderQuestion();
  });
}

/**
 * this function checks the correctnes of the answer
 */
function checkAnswer() {
  let form = document.getElementById('qForm');
  let ans = form['answer'];
  for (let i = 0; i < ans.length; i++) {
    //is a button checked
    if (ans[i].checked) {
      //compare value of ans[i] to correct answer
      if (
        ans[i].value === STORE.questions[STORE.questionNumber].correctAnswer
      ) {
        scoreKeeper(true);
      } else {
        scoreKeeper(false);
      }
    }
  }
}

function generateAnswerSnackbar(questionAnswer) {
  return `<div class=.${STORE.questionNumber}>
              <p>Sorry, the correct answer is ${questionAnswer}</p>
          </div>`;
}

function scoreKeeper(bool) {
  if (bool === true) {
    console.log('plus 1 point');
    STORE.score++;
    $(`.${STORE.questionNumber}`)
      .addClass('green')
      .addClass('snackbar')
      .html(`<p>Correct!</p>`)
      .setTimeout(() => {
        $(this.removeClass('show'));
      }, 4000);
    $('section.main_card');
    console.log('next q!');
    STORE.questionNumber++;
  }
  if (bool === false) {
    console.log('no points for you');
    $(`.${STORE.questionNumber}`)
      .addClass('red')
      .addClass('snackbar')
      .html(
        generateAnswerSnackbar(
          STORE.questions[STORE.questionNumber].correctAnswer
        )
      );
    console.log('next q!');
    STORE.questionNumber++;
  }
}

function handleQuiz() {
  if (STORE.quizStart === false) {
    renderStartQuiz();
  } else {
    renderQuestion();
  }
}

$(handleQuiz);
