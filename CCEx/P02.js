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
{
question: "What does a Mandatory Access Control (MAC) policy enforce across all subjects and objects within an information system?",
options: ["A) Variable access rules", "B) Uniformly enforced security policies", "C) Subjective access permissions", "D) Dynamic access controls"],
answer: "B"
},
{
question: "Who is typically responsible for modifying security rules in a system governed by Mandatory Access Control?",
options: ["A) All users with access to the system", "B) Trusted security administrators", "C) Object owners", "D) System users with appropriate privileges"],
answer: "B"
},
{
question: "Which of the following actions is constrained by a Mandatory Access Control policy?",
options: ["A) Passing information to unauthorized subjects or objects", "B) Granting privileges to other subjects", "C) Modifying system components at will", "D) Choosing arbitrary security attributes for objects"],
answer: "A"
},
{
question: "What distinguishes Mandatory Access Control (MAC) from Discretionary Access Control (DAC)?",
options: ["A) The complexity of access rules", "B) The involvement of security administrators", "C) The discretion of object owners", "D) The flexibility of access permissions"],
answer: "B"
},
{
question: "In a system governed by Mandatory Access Control, who assigns access rights or permissions?",
options: ["A) Object owners", "B) System users", "C) Trusted security administrators", "D) Integrated identity management systems"],
answer: "C"
},
{
question: "What is one of the main restrictions imposed by Mandatory Access Control?",
options: ["A) Limiting system resources", "B) Restricting network access", "C) Confining subjects from modifying security attributes", "D) Allowing unrestricted information sharing"],
answer: "C"
},
{
question: "Which type of access control gives priority to security administrators' decisions over object owners' discretion?",
options: ["A) Discretionary Access Control", "B) Role-Based Access Control", "C) Mandatory Access Control", "D) Attribute-Based Access Control"],
answer: "C"
},
{
question: "What is a key feature of Mandatory Access Control policies?",
options: ["A) Subjective assignment of access rights", "B) Dynamic modification of security rules", "C) Uniform enforcement of security policies", "D) Flexible control over access permissions"],
answer: "C"
},
{
question: "Which aspect of access control is mandatory in Mandatory Access Control policies?",
options: ["A) Subjective decision-making", "B) Object owners' discretion", "C) Security administrators' authority", "D) Integrated identity management"],
answer: "C"
},
{
question: "How do Mandatory Access Control policies contribute to overall system security?",
options: ["A) By providing flexibility in access permissions", "B) By allowing unrestricted modification of security rules", "C) By uniformly enforcing security policies across all subjects and objects", "D) By giving object owners full control over access rights"],
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
