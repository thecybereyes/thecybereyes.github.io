    var questions = [

{
question: "Which type of access controls primarily involve tangible methods or mechanisms?",
options: ["A) Physical access controls", "B) Logical access controls", "C) Biometric access controls", "D) Surveillance access controls"],
answer: "A"
},
{
question: "What are logical access controls primarily designed to limit access to?",
options: ["A) Physical assets", "B) Tangible areas", "C) Systems and electronic resources", "D) Security policies"],
answer: "C"
},
{
question: "Which of the following is an example of a logical access control method?",
options: ["A) Security guards", "B) Key cards", "C) Fences", "D) Surveillance cameras"],
answer: "B"
},
{
question: "What type of mechanisms do logical access controls utilize?",
options: ["A) Tangible", "B) Physical", "C) Electronic", "D) Mechanical"],
answer: "C"
},
{
question: "What role do passwords play in logical access control?",
options: ["A) Identifying users based on physical characteristics", "B) Limiting access to electronic resources", "C) Physically restricting entry to a building", "D) Monitoring network traffic"],
answer: "B"
},
{
question: "How do biometrics contribute to logical access control?",
options: ["A) By providing physical barriers", "B) By electronically limiting access to systems", "C) By controlling the flow of people in a building", "D) By recording video surveillance"],
answer: "B"
},
{
question: "What do badge/token readers connected to a system typically control?",
options: ["A) Physical access to a building", "B) Electronic access to data and resources", "C) Network bandwidth usage", "D) Inventory management"],
answer: "B"
},
{
question: "Which type of access controls limit someone from accessing systems?",
options: ["A) Physical access controls", "B) Logical access controls", "C) Biometric access controls", "D) Surveillance access controls"],
answer: "B"
},
{
question: "In what ways do logical access controls contribute to overall security?",
options: ["A) By providing physical barriers", "B) By granting access to all users indiscriminately", "C) By electronically limiting access to authorized individuals", "D) By creating vulnerabilities in the system"],
answer: "C"
},
{
question: "What is the primary purpose of logical access controls?",
options: ["A) To regulate physical access", "B) To control surveillance systems", "C) To limit electronic access to systems and resources", "D) To manage inventory levels"],
answer: "C"
},
      
    ];

    var totalMarks = 0;

    function createQuestionElement(question, options, questionNumber) {
        var questionElement = document.createElement("div");
        questionElement.className = "question";
        questionElement.innerHTML = "<h5>Question " + questionNumber + ": " + question + "</h5>";

        options.forEach(function (option, index) {
            var optionElement = document.createElement("input");
            optionElement.type = "radio";
            optionElement.name = "question" + questionNumber;
            optionElement.value = String.fromCharCode(65 + index); // ASCII code for 'A' is 65
            var labelElement = document.createElement("label");
            labelElement.htmlFor = optionElement.id;
            labelElement.textContent = option;
            questionElement.appendChild(optionElement);
            questionElement.appendChild(labelElement);
            questionElement.appendChild(document.createElement("br"));
        });

        return questionElement;
    }

    function populateQuestions() {
        var questionsContainer = document.getElementById("questions-container");
        questions.forEach(function (questionData, index) {
            var questionElement = createQuestionElement(questionData.question, questionData.options, index + 1);
            questionsContainer.appendChild(questionElement);
        });
    }

    function checkAnswer(questionNumber, selectedOption) {
        var correctAnswer = questions[questionNumber - 1].answer;
        if (selectedOption === correctAnswer) {
            return 1;
        } else {
            return 0;
        }
    }

    function submitExam() {
        totalMarks = 0;
        var questionsContainer = document.getElementById("questions-container");
        questions.forEach(function (_, index) {
            var selectedOption = document.querySelector('input[name="question' + (index + 1) + '"]:checked');
            if (selectedOption) {
                totalMarks += checkAnswer(index + 1, selectedOption.value);
                if (checkAnswer(index + 1, selectedOption.value) === 0) {
                    questionsContainer.children[index].classList.add("incorrect");
                }
            }
        });
        alert("Total Marks Obtained: " + totalMarks);
        document.getElementById("show-answers-btn").style.display = "inline"; // Show the "Show Answers" button
    }

    function showAnswers() {
        var answerList = "";
        questions.forEach(function (questionData, index) {
            answerList += (index + 1) + "-" + questionData.answer + ", ";
        });
        answerList = answerList.slice(0, -2); // Remove trailing comma and space
        alert("Correct Answers:\n" + answerList);
    }

    window.onload = function () {
        populateQuestions();
    };
