    var questions = [

{
question: "What does CIA stand for in information security?",
options: ["A) Centralized Information Access", "B) Confidentiality, Integrity, Availability", "C) Cybersecurity Investigation Agency", "D) Critical Information Assurance"],
answer: "B"
},
{
question: "What is the primary goal of confidentiality in information security?",
options: ["A) To ensure data is available when needed", "B) To prevent unauthorized access to sensitive information", "C) To authenticate users accessing a network", "D) To monitor network traffic for suspicious activities"],
answer: "B"
},
{
question: "Which of the following is an example of an authentication factor?",
options: ["A) Firewall", "B) Encryption key", "C) Intrusion Detection System (IDS)", "D) Password"],
answer: "D"
},
{
question: "Which of the following is a best practice for password security?",
options: ["A) Using easily guessable passwords", "B) Sharing passwords with coworkers", "C) Changing passwords frequently", "D) Writing passwords on sticky notes"],
answer: "C"
},
{
question: "Which of the following is an example of a technical control?",
options: ["A) Security policy", "B) Security awareness training", "C) Intrusion Detection System (IDS)", "D) Security incident response plan"],
answer: "C"
},
{
question: "What is the purpose of a security policy in an organization?",
options: ["A) To enforce access control policies", "B) To document incident response procedures", "C) To define rules and guidelines for protecting assets", "D) To analyze security event logs"],
answer: "C"
},
{
question: "What does the principle of 'defense-in-depth' refer to in information security?",
options: ["A) Using multiple layers of security controls", "B) Focusing solely on perimeter security", "C) Ignoring security incidents until they escalate", "D) Encrypting sensitive data in transit"],
answer: "A"
},
{
question: "Which of the following is a key component of risk management in information security?",
options: ["A) Avoidance", "B) Ignoring potential threats", "C) Sharing all sensitive information publicly", "D) Delaying incident response actions"],
answer: "A"
},
{
question: "What is the purpose of access control in information security?",
options: ["A) To authenticate users accessing a network", "B) To monitor network traffic for suspicious activities", "C) To prevent unauthorized access to resources", "D) To encrypt sensitive data at rest"],
answer: "C"
},
{
question: "Which of the following is a common method for securing wireless networks?",
options: ["A) Leaving the network open without any security measures", "B) Using weak encryption methods", "C) Implementing Wi-Fi Protected Access (WPA/WPA2)", "D) Broadcasting the network's SSID"],
answer: "C"
},
{
question: "What is the primary goal of encryption in information security?",
options: ["A) To hide sensitive data from authorized access", "B) To slow down network traffic", "C) To prevent system crashes", "D) To protect data confidentiality and integrity"],
answer: "D"
},
{
question: "What is the purpose of a security awareness training program?",
options: ["A) To increase the likelihood of security incidents", "B) To educate employees about security risks and best practices", "C) To encourage sharing of sensitive information", "D) To decrease employee productivity"],
answer: "B"
},
{
question: "What is the main objective of a vulnerability assessment?",
options: ["A) To exploit vulnerabilities in a system", "B) To identify weaknesses in security controls", "C) To ignore potential security threats", "D) To delay patching known vulnerabilities"],
answer: "B"
},
{
question: "What is the purpose of a firewall in information security?",
options: ["A) To authenticate users accessing a network", "B) To monitor network traffic for suspicious activities", "C) To prevent unauthorized access to a network", "D) To encrypt sensitive data in transit"],
answer: "C"
},
{
question: "Which of the following is an example of a social engineering attack?",
options: ["A) Brute force attack", "B) SQL injection", "C) Phishing", "D) Denial-of-Service (DoS)"],
answer: "C"
},
{
question: "What is the purpose of a security incident response plan?",
options: ["A) To ignore security incidents", "B) To document security policies", "C) To define procedures for responding to security incidents", "D) To delay communication with stakeholders during security incidents"],
answer: "C"
},
{
question: "Which of the following is a key principle of least privilege?",
options: ["A) Granting users access based on their role and responsibilities", "B) Granting users access to all resources", "C) Granting users access without any restrictions", "D) Granting users access only to sensitive information"],
answer: "A"
},
{
question: "What is the primary goal of integrity in information security?",
options: ["A) To ensure data is available when needed", "B) To prevent unauthorized access to sensitive information", "C) To protect data from unauthorized modification", "D) To monitor network traffic for suspicious activities"],
answer: "C"
},
{
question: "What is the purpose of security controls in information security?",
options: ["A) To ignore security incidents", "B) To delay incident response actions", "C) To prevent, detect, and respond to security threats", "D) To share all sensitive information publicly"],
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
    }

    window.onload = function () {
        populateQuestions();
    };
