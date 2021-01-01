"use strict";

var correctAnswers = ['B', 'B', 'B', 'B'];
var form = document.querySelector('.quiz-form');
var result = document.querySelector('.result');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var score = 0;
  var userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]; //check answers

  userAnswers.forEach(function (answer, index) {
    if (answer === correctAnswers[index]) {
      score = score + 25;
    }
  }); // console.log(score);
  // show result on page

  scrollTo(0, 0);
  result.classList.remove('d-none');
  var output = 0;
  var timer = setInterval(function () {
    result.querySelector('span').textContent = "".concat(output, "%");

    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
