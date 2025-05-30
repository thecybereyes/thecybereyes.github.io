    var questions = [

{
	question: "Which of the following statements is true about access control?",
	options: [
		"A. It solely focuses on restricting access to information systems and data.",
		"B. It grants appropriate access to authorized personnel and denies access to unauthorized entities.",
		"C. It only requires physical security measures like fences and cameras.",
		"D. Its primary function is to monitor user activity within the system."
	],
	answer: "B"
},
{
	question: "What is the main objective of the 'Defense in Depth' strategy?",
	options: [
		"A. To completely eliminate the possibility of cyberattacks.",
		"B. To implement a single robust security measure across the organization.",
		"C. To create multiple layers of security controls to mitigate various threats.",
		"D. To assign all users privileged access for efficient system administration."
	],
	answer: "C"
},
{
	question: "The principle of Least Privilege emphasizes:",
	options: [
		"A. Granting users extensive access rights for administrative tasks.",
		"B. Providing users with the minimum access necessary to perform their duties.",
		"C. Encouraging users to share their login credentials with colleagues.",
		"D. Implementing complex password policies to prevent unauthorized access."
	],
	answer: "B"
},
{
	question: "What is the primary benefit of Just-in-Time (JIT) privileged access management?",
	options: [
		"A. It simplifies user provisioning by assigning permanent administrative rights.",
		"B. It reduces the attack surface by granting elevated access only when required.",
		"C. It eliminates the need for password resets, improving user convenience.",
		"D. It allows users to share privileged accounts for collaborative tasks."
	],
	answer: "B"
},
{
	question: "Which principle ensures that no single individual can control an entire high-risk transaction?",
	options: [
		"A. Principle of Least Privilege",
		"B. Two-Person Rule",
		"C. Mandatory Access Control (MAC)",
		"D. Role-Based Access Control (RBAC)"
	],
	answer: "B"
},
{
	question: "Biometric access control systems primarily rely on:",
	options: [
		"A. User-defined passwords and PINs.",
		"B. Physical characteristics or behavioral traits of individuals.",
		"C. Network security protocols like firewalls and intrusion detection systems.",
		"D. Implementing complex access control lists (ACLs) on network resources."
	],
	answer: "B"
},
{
	question: "What type of access control utilizes magnetic stripe cards or key fobs for user identification?",
	options: [
		"A. Logical Access Control",
		"B. Physical Security Controls",
		"C. Biometric Access Control",
		"D. Proximity Access Control"
	],
	answer: "D"
},
{
	question: "Which statement accurately describes Discretionary Access Control (DAC)?",
	options: [
		"A. Security administrators have complete control over access permissions.",
		"B. File owners hold the discretion to determine user access rights.",
		"C. User privileges are solely based on their assigned roles within the organization.",
		"D. Access control decisions are automated based on pre-defined security policies."
	],
	answer: "B"
},
{
	question: "MFA (Multi-Factor Authentication) is an example of:",
	options: [
		"A. Physical Security Control",
		"B. Logical Access Control",
		"C. Mandatory Access Control (MAC)",
		"D. Discretionary Access Control (DAC)"
	],
	answer: "B"
},
{
	question: "Which statement best describes Privileged Access Management (PAM)?",
	options: [
		"A. It assigns static administrative privileges to user accounts.",
		"B. It grants elevated access only when required for specific tasks.",
		"C. It eliminates the need for password resets for privileged users.",
		"D. It focuses solely on physical security measures for critical systems."
	],
	answer: "B"
},
{
	question: "What is the core function of Segregation of Duties?",
	options: [
		"A. Implementing complex access control lists (ACLs).",
		"B. Distributing critical tasks among multiple individuals.",
		"C. Requiring two-factor authentication for all login attempts.",
		"D. Granting extensive access rights to system administrators."
	],
	answer: "B"
},
{
	question: "Two-person integrity aims to:",
	options: [
		"A. Eliminate the physical presence of security personnel.",
		"B. Reduce the risk of insider threats through shared responsibility.",
		"C. Grant complete access control to a single authorized individual.",
		"D. Simplify the login process for authorized users."
	],
	answer: "B"
},
{
	question: "Which of the following is an example of a physical access control measure?",
	options: [
		"A. Password complexity requirements",
		"B. User account permissions",
		"C. Security cameras",
		"D. Role-based access control (RBAC)"
	],
	answer: "C"
},
{
	question: "Biometric access control systems primarily rely on:",
	options: [
		"A. User knowledge (e.g., passwords)",
		"B. Unique physical or behavioral characteristics",
		"C. One-time use security codes",
		"D. Complex encryption algorithms"
	],
	answer: "B"
},
{
	question: "Discretionary Access Control (DAC) grants control over access permissions to:",
	options: [
		"A. Security administrators only.",
		"B. The owner of the resource",
		"C. All users within the organization.",
		"D. Predefined roles assigned to users."
	],
	answer: "B"
},
{
	question: "Mandatory Access Control (MAC) is characterized by:",
	options: [
		"A. User-defined access control lists.",
		"B. Security administrators managing access rights.",
		"C. Permissions automatically assigned based on user roles.",
		"D. Limited access control functionalities."
	],
	answer: "B"
},
{
	question: "What is the main distinction between MAC and DAC?",
	options: [
		"A. MAC requires two-factor authentication, while DAC does not.",
		"B. DAC offers more granular control over access permissions.",
		"C. MAC control is centralized by administrators, while DAC is user-driven.",
		"D. MAC is only applicable to physical security measures."
	],
	answer: "C"
},
{
	question: "Assigning users permissions based on their job functions falls under the concept of:",
	options: [
		"A. Mandatory Access Control (MAC)",
		"B. Role-Based Access Control (RBAC)",
		"C. Discretionary Access Control (DAC)",
		"D. Segregation of Duties"
	],
	answer: "B"
},
{
	question: "Privilege creep refers to the:",
	options: [
		"A. Intentional misuse of access privileges.",
		"B. Gradual accumulation of unnecessary access rights.",
		"C. Implementation of complex password policies.",
		"D. Regular review and update of user permissions."
	],
	answer: "B"
},
{
	question: "Which of the following actions can be performed with DAC but not MAC?",
	options: [
		"A. Modifying access control rules.",
		"B. Granting access privileges to other users.",
		"C. Assigning security labels to resources.",
		"D. Restricting access to specific users."
	],
	answer: "B"
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
