    var questions = [



{
	question: "A chief information security officer (CISO) at a large organization documented a policy that establishes the acceptable use of cloud environments for all staff. This is an example of a:",
	options: ["A) Management/Administrative control", "B) Technical control", "C) Physical control", "D) Cloud control"],
	answer: "A"
},

{
	question: "Is it possible to avoid risk?",
	options: ["A) Yes", "B) No", "C) Sometimes", "D) Never"],
	answer: "B",
},

{
	question: "What is meant by non-repudiation?",
	options: [
		"A) If a user does something, they can't later claim that they didn't do it.",
		"B) Controls to protect the organization's reputation from harm due to inappropriate social media postings by employees, even if on their private accounts and personal time.",
		"C) It is part of the rules set by administrative controls. ",
		"D) It is a security feature that prevents session replay attacks. "
	],
	answer: "A"
},

{
	question: "Which of the following is NOT one of the four typical ways of managing risk?",
	options: [
		"A) Avoid",
		"B) Accept",
		"C) Mitigate",
		"D) Conflate"
	],
	answer: "D"
},

{
	question: "Siobhan is deciding whether to make a purchase online; the vendor wants Siobhan to create a new user account, and is requesting Siobhan's full name, home address, credit card number, phone number, email address, the ability to send marketing messages to Siobhan, and permission to share this data with other vendors. Siobhan decides that the item for sale is not worth the value of Siobhan's personal information, and decides to not make the purchase.  What kind of risk management approach did Siobhan make?",
	options: [
		"A) Avoidance",
		"B) Acceptance",
		"C) Mitigation",
		"D) Transfer"
	],
	answer: "A"
},

{
	question: "Guillermo is the system administrator for a midsized retail organization. Guillermo has been tasked with writing a document that describes, step-by-step, how to securely install the operating system on a new laptop. This document is an example of a ________.",
	options: [
		"A) Policy",
		"B) Standard",
		"C) Procedure",
		"D) Guideline"
	],
	answer: "C"
},

{
	question: "Lankesh is the security administrator for a small food-distribution company. A new law is published by the country in which Lankesh's company operates; the law conflicts with the company's policies. Which governance element should Lankesh's company follow?",
	options: [
		"A) The law",
		"B) The policy",
		"C) Any procedures the company has created for the particular activities affected by the law",
		"D) Lankesh should be allowed to use personal and professional judgment to make the determination of how to proceed"
	],
	answer: "A"
},

{
	question: "Kristal is the security administrator for a large online service provider. Kristal learns that the company is harvesting personal data of its customers and sharing the data with local governments where the company operates, without the knowledge of the users, to allow the governments to persecute users on the basis of their political and philosophical beliefs. The published user agreement states that the company will not share personal user data with any entities without the users' explicit permission. According to the ISC2 Code of Ethics, to whom does Kristal ultimately owe a duty in this situation?",
	options: [
		"A) The governments of the countries where the company operates",
		"B) The company Kristal works for",
		"C) The users",
		"D) ISC2"
	],
	answer: "C"
},

{
	question: "While taking the certification exam for this certification, you notice another candidate for the certification cheating. What should you do?",
	options: [
		"A) Nothing—each person is responsible for their own actions.",
		"B) Yell at the other candidate for violating test security.",
		"C) Report the candidate to ISC2.",
		"D) Call local law enforcement."
	],
	answer: "C"
},

{
	question: "The concept of 'secrecy' is most related to which foundational aspect of security?",
	options: [
		"A) Confidentiality",
		"B) Integrity",
		"C) Availability",
		"D) Plausibility"
	],
	answer: "A"
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
