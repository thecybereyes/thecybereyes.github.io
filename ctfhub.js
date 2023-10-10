
  function checkAnswer(id, correctAnswer) {
    var userAnswer = document.getElementById(id).value.trim();
    if (userAnswer === correctAnswer) {
      alert("Correct! \u2713"); // Unicode checkmark (✔)
    } else {
      alert("Incorrect. \u2717  Please try again. "); // Unicode cross mark (✗)
    }
  }
  
 // Disable right-click context menu
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      });
