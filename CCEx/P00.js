    var questions = [

      
      {
	question: "Which department in a company is NOT typically involved in a Disaster Recovery Plan (DRP)?",
	options: ["A. IT", "B. Executive", "C. Financial", "D. Public Relations"],
	answer: "C"
},
{
    question: "Which of these is NOT a best practice in access management?",
    options: ["A. Requesting a justification when upgrading permission", "B. Periodically assessing whether user permissions still apply", "C. Giving only the right amount of permission", "D. Trust but verify"],
     answer: "D"
},
        
{
    question: "Which of these is NOT one of the (ISC)² ethics canons?",
    options: ["A. Consider the social consequences of the systems you are designing", "B. Act honorably, honestly, justly, responsibly, and legally", "C. Provide diligent and competent service to principals", "D. Protect society, the common good, necessary public trust and confidence, and the infrastructure"],
    answer: "D"
},
{
    question: "What technology is MOST LIKELY to conserve the storage space required for video recordings?",
    options: ["A. Motion detection", "B. PTZ", "C. Infrared cameras", "D. Facial recognition"],
    answer: "A"
},
{
    question: "When analyzing risks, which of these activities is required?",
    options: ["A. Determining the likelihood of occurrence of a set of risks", "B. Accepting all evaluated risks", "C. Identifying risks associated with loss of confidentiality", "D. Selecting the appropriate controls"],
    answer: "A"
},
{
    question: "In a DAC policy scenario, which of these tasks can only be performed by a subject granted access to information?",
    options: ["A. Changing security attributes", "B. Executing the information", "C. Modifying the information", "D. Reading the information"],
    answer: "D"
},
{
    question: "A security consultant hired to design the security policies for the PHI within an organization will be primarily handling:",
    options: ["A. Personal Health information", "B. Public Health information", "C. Procedural Health information", "D. Protected Health information"],
    answer: "D"
},
{
    question: "Which of these is an example of a MAC address?",
    options: ["A. 10.23.19.49", "B. 2001:db8:3333:4444:5555:6666:7777:8888", "C. 00-51-02-1F-58-F6", "D. 0051021158"],
    answer: "C"
},
{
    question: "Which of these techniques is PRIMARILY used to ensure data integrity?",
    options: ["A. Content Encryption", "B. Backups", "C. Message Digest", "D. Labeling"],
    answer: "C"
},
{
    question: "A high-level executive of an organization receives a malicious email that tries to trick him. Which attack is the perpetrator using?",
    options: ["A. Spear phishing", "B. Whaling", "C. DDOS", "D. Phishing"],
    answer: "A"
},
{
    question: "Suppose that an organization wants to implement measures to strengthen its detective access controls. Which one of these tools should they implement?",
    options: ["A. IDS", "B. Patches", "C. Encryption", "D. Backups"],
    answer: "A"
},
{
    question: "Which of these exercises goes through a sample of an incident step-by-step, validating what each person will do?",
    options: ["A. A tabletop exercise", "B. A walk-through exercise", "C. A checklist exercise", "D. A simulation exercise"],
    answer: "A"
},
{
    question: "Which cloud service model provides the most suitable environment for customers who want to install their custom operating system?",
    options: ["A. PaaS", "B. IaaS", "C. SaaS", "D. SLA"],
    answer: "B"
},
{
    question: "Which part of the CIA Triad will be PRIMARILY jeopardized in a Distributed Denial of Service (DDOS) attack?",
    options: ["A. Accountability", "B. Integrity", "C. Confidentiality", "D. Availability"],
    answer: "D"
},
{
    question: "Which type of recovery site has some or most systems in place, but does not have the data needed to take over operations?",
    options: ["A. A cold site", "B. A warm site", "C. A cloud site", "D. A hot site"],
    answer: "B"
},
{
    question: "Which of these access control models is commonly used in the military?",
    options: ["A. Role-Based Access Control (RBAC)", "B. Discretionary Access Control (DAC)", "C. Mandatory Access Control (MAC)", "D. Attribute-Based Access Control (ABAC)"],
    answer: "C"
},
{
    question: "Which type of attack attempts to mislead the user into exposing personal information by sending fraudulent emails?",
    options: ["A. Denial of Service", "B. Trojans", "C. Cross-Site Scripting", "D. Phishing"],
    answer: "D"
},
{
    question: "Which of these documents is MORE directly related to what can be done with a system or with its information?",
    options: ["A. MOA", "B. SLA", "C. NDA", "D. MOU"],
    answer: "B"
},
{
    question: "Which type of security control does NOT include CCTV cameras?",
    options: ["A. Preventive", "B. Corrective", "C. Detective", "D. Deterrent"],
    answer: "B"
},
{
    question: "Which of these is LEAST likely to be installed by an infection?",
    options: ["A. Keylogger", "B. Trojan", "C. Logic Bomb", "D. Backdoor"],
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
    }

    window.onload = function () {
        populateQuestions();
    };