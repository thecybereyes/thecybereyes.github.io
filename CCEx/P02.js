    var questions = [

{
question: "Which type of access controls primarily involve tangible methods or mechanisms?",
options: ["a) Physical access controls", "b) Logical access controls", "c) Biometric access controls", "d) Surveillance access controls"],
answer: "a) Physical access controls"
},
{
question: "What are logical access controls primarily designed to limit access to?",
options: ["a) Physical assets", "b) Tangible areas", "c) Systems and electronic resources", "d) Security policies"],
answer: "c) Systems and electronic resources"
},
{
question: "Which of the following is an example of a logical access control method?",
options: ["a) Security guards", "b) Key cards", "c) Fences", "d) Surveillance cameras"],
answer: "b) Key cards"
},
{
question: "What type of mechanisms do logical access controls utilize?",
options: ["a) Tangible", "b) Physical", "c) Electronic", "d) Mechanical"],
answer: "c) Electronic"
},
{
question: "What role do passwords play in logical access control?",
options: ["a) Identifying users based on physical characteristics", "b) Limiting access to electronic resources", "c) Physically restricting entry to a building", "d) Monitoring network traffic"],
answer: "b) Limiting access to electronic resources"
},
{
question: "How do biometrics contribute to logical access control?",
options: ["a) By providing physical barriers", "b) By electronically limiting access to systems", "c) By controlling the flow of people in a building", "d) By recording video surveillance"],
answer: "b) By electronically limiting access to systems"
},
{
question: "What do badge/token readers connected to a system typically control?",
options: ["a) Physical access to a building", "b) Electronic access to data and resources", "c) Network bandwidth usage", "d) Inventory management"],
answer: "b) Electronic access to data and resources"
},
{
question: "Which type of access controls limit someone from accessing systems?",
options: ["a) Physical access controls", "b) Logical access controls", "c) Biometric access controls", "d) Surveillance access controls"],
answer: "b) Logical access controls"
},
{
question: "In what ways do logical access controls contribute to overall security?",
options: ["a) By providing physical barriers", "b) By granting access to all users indiscriminately", "c) By electronically limiting access to authorized individuals", "d) By creating vulnerabilities in the system"],
answer: "c) By electronically limiting access to authorized individuals"
},
{
question: "What is the primary purpose of logical access controls?",
options: ["a) To regulate physical access", "b) To control surveillance systems", "c) To limit electronic access to systems and resources", "d) To manage inventory levels"],
answer: "c) To limit electronic access to systems and resources"
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
