    var questions = [

{
question: "What is the primary advantage of IPv6 over IPv4 in terms of address space?",
options: [
"A) IPv6 addresses are shorter, making them easier to manage.",
"B) IPv6 addresses are 128 bits long, providing a significantly larger address space.",
"C) IPv6 addresses use hexadecimal digits, improving efficiency.",
"D) IPv6 addresses support backward compatibility with IPv4 networks."
],
answer: "B"
},

{
question: "Which of the following is a feature of IPv6 that enhances network security?",
options: [
"A) Dynamic address allocation",
"B) Mandatory implementation of IPsec",
"C) Use of private addressing ranges",
"D) Compatibility with NAT (Network Address Translation)"
],
answer: "B"
},

{
question: "How is an IPv6 address typically represented?",
options: [
"A) 4 octets separated by dots, ranging from 0 to 255",
"B) 8 groups of four hexadecimal digits separated by colons",
"C) 16 octets separated by hyphens, ranging from 0 to 9",
"D) 6 groups of four binary digits separated by periods"
],
answer: "B"
},

{
question: "Which IPv6 address is reserved for local loopback, similar to 127.0.0.1 in IPv4?",
options: [
"A) ::1",
"B) 2001:db8::",
"C) fc00::",
"D) 2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"
],
answer: "A"
},

{
question: "What range of IPv6 addresses is reserved for internal network use and is not routable on the internet?",
options: [
"A) 2001:db8::",
"B) fc00:: to fdff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
"C) ::1",
"D) 2001:db8:ffff:ffff:ffff:ffff:ffff:ffff"
],
answer: "B"
},

{
question: "Which layer of the OSI Model is responsible for converting data into binary for transmission across physical wires?",
options: [
"A) Application Layer (7)",
"B) Presentation Layer (6)",
"C) Session Layer (5)",
"D) Physical Layer (1)"
],
answer: "D"
},

{
question: "Which layer of the OSI Model is commonly associated with image file formats like JPEG or PNG?",
options: [
"A) Application Layer (7)",
"B) Presentation Layer (6)",
"C) Session Layer (5)",
"D) Transport Layer (4)"
],
answer: "B"
},

{
question: "What layer of the OSI Model is responsible for managing logical ports such as NetBIOS?",
options: [
"A) Presentation Layer (6)",
"B) Session Layer (5)",
"C) Transport Layer (4)",
"D) Network Layer (3)"
],
answer: "B"
},

{
question: "When discussing TCP/UDP, which layer of the OSI Model is involved?",
options: [
"A) Presentation Layer (6)",
"B) Session Layer (5)",
"C) Transport Layer (4)",
"D) Network Layer (3)"
],
answer: "C"
},

{
question: "In the OSI Model, which layer is responsible for routers sending packets?",
options: [
"A) Physical Layer (1)",
"B) Data Link Layer (2)",
"C) Network Layer (3)",
"D) Transport Layer (4)"
],
answer: "C"
},

{
question: "What is a key advantage of wireless networking compared to wired networks?",
options: [
"A) Higher speed and reliability",
"B) Lower cost and easier deployment",
"C) More secure connections",
"D) Greater resistance to environmental interference"
],
answer: "B"
},

{
question: "How can threat actors intrude on wireless networks compared to wired networks?",
options: [
"A) By physically accessing the network cables",
"B) By placing sniffer taps onto cables",
"C) By using USB devices to gain access",
"D) At a distance without needing physical access to the network"
],
answer: "D"
},

{
question: "What type of attacks are TCP/IP stacks vulnerable to due to improper implementation?",
options: [
"A) Social engineering attacks",
"B) DoS/DDoS attacks",
"C) Phishing attacks",
"D) Malware attacks"
],
answer: "B"
},

{
question: "What is the term for the act of monitoring traffic patterns to obtain information about a network?",
options: [
"A) Spoofing",
"B) Man-in-the-middle attack",
"C) Network monitoring or sniffing",
"D) Fragmentation attack"
],
answer: "C"
},

{
question: "What passive attacks can TCP/IP and most protocols be subject to?",
options: [
"A) Active reconnaissance attacks",
"B) Fragment attacks",
"C) Spoofing attacks",
"D) Sniffing or monitoring attacks"
],
answer: "D"
},

{
question: "What does a MAC address represent in a network device?",
options: [
"A) It denotes the logical IP address of the device.",
"B) It indicates the vendor or manufacturer of the physical network interface.",
"C) It represents the network interface within the network.",
"D) It serves as the unique identifier for the device on the internet."
],
answer: "B"
},

{
question: "What is the significance of the first 3 bytes (24 bits) of a MAC address?",
options: [
"A) They denote the logical IP address of the device.",
"B) They represent the network interface within the network.",
"C) They indicate the vendor or manufacturer of the physical network interface.",
"D) They serve as the unique identifier for the device on the internet."
],
answer: "C"
},

{
question: "What happens if two devices in the same local network have the same MAC address?",
options: [
"A) The network automatically assigns a new MAC address to one of the devices.",
"B) An IP conflict occurs, leading to communication errors.",
"C) Both devices are unable to connect to the network.",
"D) The devices function normally without any issues."
],
answer: "B"
},

{
question: "Which type of address is generally assigned in the firmware of the network interface?",
options: [
"A) IP address",
"B) Physical address",
"C) Logical address",
"D) MAC address"
],
answer: "D"
},

{
question: "What purpose does a logical IP address serve in a network?",
options: [
"A) It denotes the vendor or manufacturer of the physical network interface.",
"B) It represents the network interface within the network.",
"C) It serves as the unique identifier for the device on the internet.",
"D) It helps maintain communications when hardware is swapped."
],
answer: "D"
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
