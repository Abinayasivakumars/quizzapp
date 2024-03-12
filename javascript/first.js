$(document).ready(function() {
    $("#quiz-container").hide();
    $("#result").hide();
    
    var questions = [
      {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 1
      },
      {
        question: "What is our national animal?",
        options: ["Meow", "Dog", "Tiger", "Lion"],
        answer: 2
      },
      {
        question: "What is mean by RAM?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: 2
      },
      {
        question: "What is the Location of KG?",
        options: ["Chennai", "Coimbatore", "Erode", "Ooty"],
        answer: 1
      },
      {
        question: "What is the capital of Pakistan?",
        options: ["Ooty", "Coonoor", "Kotagiri", "Gudalur"],
        answer: 2
      }
    ];

     // Login handling
  $("#login-form").submit(function(event) {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    if (username === "user" && password === "password") {
      $("#username").val("");
      $("#password").val("");
      $("#login-container").hide();
      $("#quiz-container").show();
      displayQuestion();
    } else {
      alert("Invalid username or password!");
    }
  });
  
    let currentQuestion = 0;
    let score = 0;
  
    function displayQuestion() {
      if (currentQuestion >= questions.length) {
        showResult();
        return;
      }
  
      const question = questions[currentQuestion];
      $("#question").text(question.question);
      $("#options").empty();
      $("#feedback").hide();
  
      question.options.forEach((option, index) => {
        const optionElement = $('<li><input type="radio" name="answer" value="' + index + '">' + option + '</li>');
        $("#options").append(optionElement);
      });
    }
  
    function checkAnswer() {
      const selectedOption = $("input[name='answer']:checked").val();
      if (selectedOption !== undefined) {
        const correctAnswer = questions[currentQuestion].answer;
        if (selectedOption == correctAnswer) {
          score++;
        } else {
          score -= 0.25;
        }
        currentQuestion++;
        displayQuestion();
      }else{
        alert("Choose any answer");
      }
    }
  
    function showResult() {
      $("#question").text("Quiz Completed!");
      $("#options").empty();
      $("#next-question").hide();
      $("#result").show().text("Your score: " + score + " out of " + questions.length);
    }
    displayQuestion();

    $("#next-question").click(checkAnswer);
});  