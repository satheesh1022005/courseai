import React, { useState, useEffect } from 'react';
import Profile from '../pro/profile';
import './Chat.css';
import ParentComponent from './Parent';

const Chat = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [userDetails, setUserDetails] = useState({});
    const [selectedDomain, setSelectedDomain] = useState('');
    const [interestedTopics, setInterestedTopics] = useState([]);
    const [topicResponses, setTopicResponses] = useState([]);
    const [quizQuestions, setQuizQuestions] = useState([]);
    const [currentQuizQuestionIndex, setCurrentQuizQuestionIndex] = useState(0);
    const [userQuizResponses, setUserQuizResponses] = useState([]);
    const [userScore, setUserScore] = useState(0);
    const [topicMarks, setTopicMarks] = useState(Array(10).fill(0));

    const handleAnswer = (answer) => {
        switch (currentQuestion) {
            case 1:
                setUserDetails({ ...userDetails, domain: answer });
                setSelectedDomain(answer);
                setCurrentQuestion(2);
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                const topicIndex = currentQuestion - 2;
                const isInterestedTopic = answer === 'Yes';
                setInterestedTopics([...interestedTopics, { topic: topics[topicIndex], isInterested: isInterestedTopic }]);
                setTopicResponses([...topicResponses, isInterestedTopic]);
                setCurrentQuestion(currentQuestion + 1);
                break;
            case 12:
                const currentQuizQuestion = quizQuestions[currentQuizQuestionIndex];
                // Check if the answer is correct
                const isCorrect = answer === currentQuizQuestion.options[currentQuizQuestion.answer];

                // Update user score and topic marks
                if (isCorrect) {
                    setUserScore(userScore + 1);
                    const topicIndex = topics.indexOf(currentQuizQuestion.topic);
                    setTopicMarks((prevMarks) => {
                        const newMarks = [...prevMarks];
                        newMarks[topicIndex]++;
                        return newMarks;
                    });
                }

                // Check if there are more quiz questions
                if (currentQuizQuestionIndex < quizQuestions.length - 1) {
                    const nextQuizQuestionIndex = currentQuizQuestionIndex + 1;
                    setCurrentQuizQuestionIndex(nextQuizQuestionIndex);
                } else {
                    setCurrentQuestion(13); // Move to the next question
                }
                break;
            default:
                break;
        }
    };

    const renderQuestion = () => {
        switch (currentQuestion) {
            case 1:
                return "Select the domain. Options: CSE";
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
                const topicIndex = currentQuestion - 2;
                return `Select Interested Topics. Topic: ${topics[topicIndex]}\nDescription: ${descriptions[topicIndex]}`;
            case 12:
                if (currentQuizQuestionIndex < quizQuestions.length) {
                    const currentQuizQuestion = quizQuestions[currentQuizQuestionIndex];
                    return (
                        <>
                            <div className="question bg-dark">{currentQuizQuestion.question}</div>
                        </>
                    );
                } else {
                    return `Thanks for answering! Your score is ${userScore} out of ${quizQuestions.length}`;
                }
            case 13:
                return (
                    <>
                        <div>
                            {topics.map((topic, index) => (
                                <div key={index}>
                                    {`${topic}: ${topicMarks[index]} marks`}
                                </div>
                            ))}
                        </div>
                        <div>
                            {`Thanks for answering! Your total score is ${userScore} out of ${quizQuestions.length}`}
                        </div>
                    </>
                );
            default:
                return "Thanks for answering!";
        }
    };

    const topics = [
        "Introduction to Computer Science and Programming",
        "Data Structures and Algorithms",
        "Computer Organization and Architecture",
        "Operating Systems",
        "Databases",
        "Software Engineering",
        "Artificial Intelligence",
        "Web Development",
        "Cybersecurity",
        "Human-Computer Interaction",
    ];

    const descriptions = [
        "A foundational course covering basic programming concepts and problem-solving skills.",
        "Focuses on fundamental data structures and algorithms, their analysis, and implementation.",
        "Explores the organization and architecture of computer systems, including topics like CPU design, memory hierarchy, and assembly language.",
        "Examines the principles and design of operating systems, covering topics such as process management, memory management, and file systems.",
        "Introduces database management systems, including relational databases, SQL, and database design.",
        "Covers principles and practices of software development, including requirements analysis, design, testing, and project management.",
        "Explores the principles and techniques of artificial intelligence, including machine learning, natural language processing, and computer vision.",
        "Covers the development of web applications, including HTML, CSS, JavaScript, and server-side scripting.",
        "Focuses on techniques and strategies to secure computer systems, networks, and data from cyber threats.",
        "Explores the design and evaluation of user interfaces, considering aspects of usability and user experience.",
    ];

    // The quiz questions should be populated based on the user's interested topics
    // For demonstration purposes, I'm providing some sample quiz questions
    const generateQuizQuestions = () => {
        const userInterestedTopics = interestedTopics
            .filter((topic) => topic.isInterested)
            .map((topic) => topic.topic);

        const filteredQuestions = quizQuestionsData.filter(
            (question) => userInterestedTopics.includes(question.topic)
        );

        return filteredQuestions;
    };
    const quizQuestionsData = [
        // ... (your quiz questions data)
        // Topic 1: Introduction to Computer Science and Programming
        {
            topic: "Introduction to Computer Science and Programming",
            question: "What is the primary goal of a computer program?",
            options: ["Enhancing security", "Achieving artificial intelligence", "Executing instructions", "Building databases"],
            answer: 2, // Index of the correct answer in the options array
        },
        {
            topic: "Introduction to Computer Science and Programming",
            question: "Which programming language is known for its readability and simplicity?",
            options: ["Java", "C++", "Python", "JavaScript"],
            answer: 2,
        },
        {
            topic: "Introduction to Computer Science and Programming",
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Highly Typed Machine Learning", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            answer: 0,
        },
        {
            topic: "Introduction to Computer Science and Programming",
            question: "What is the output of the following code snippet? console.log(2 + '2' - 1);",
            options: ["NaN", "12", "21", "1"],
            answer: 1,
        },
        {
            topic: "Introduction to Computer Science and Programming",
            question: "In the context of programming, what does the acronym 'API' stand for?",
            options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Program Integration", "Application Process Interface"],
            answer: 0,
        },

        // Topic 2: Data Structures and Algorithms
        {
            topic: "Data Structures and Algorithms",
            question: "What is the time complexity of a binary search algorithm?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1,
        },
        {
            topic: "Data Structures and Algorithms",
            question: "Which data structure is typically used to implement a LIFO (Last In, First Out) structure?",
            options: ["Queue", "Stack", "Linked List", "Array"],
            answer: 1,
        },
        {
            topic: "Data Structures and Algorithms",
            question: "What is the purpose of Big O notation in computer science?",
            options: ["To denote the size of data", "To represent a large constant factor", "To analyze the efficiency of algorithms", "To indicate the order of execution"],
            answer: 2,
        },
        {
            topic: "Data Structures and Algorithms",
            question: "Which sorting algorithm has an average-case time complexity of O(n log n)?",
            options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
            answer: 3,
        },
        {
            topic: "Data Structures and Algorithms",
            question: "What is an example of a dynamic programming problem?",
            options: ["Finding the factorial of a number", "Finding the greatest common divisor", "Fibonacci sequence", "Linear search"],
            answer: 2,
        },

        // Topic 3: Computer Organization and Architecture
        {
            topic: "Computer Organization and Architecture",
            question: "What is the role of the CPU in a computer system?",
            options: ["Storing data permanently", "Executing instructions", "Managing network connections", "Displaying graphics"],
            answer: 1,
        },
        {
            topic: "Computer Organization and Architecture",
            question: "Which component is responsible for temporarily storing data and instructions that the CPU uses during operation?",
            options: ["Hard Drive", "RAM (Random Access Memory)", "CPU Cache", "Solid State Drive (SSD)"],
            answer: 1,
        },
        {
            topic: "Computer Organization and Architecture",
            question: "What does the term 'clock speed' refer to in the context of a CPU?",
            options: ["The speed of data transfer between CPU and RAM", "The speed at which the CPU performs arithmetic operations", "The speed of data transfer between different components of the computer", "The speed of data transfer over a network"],
            answer: 1,
        },
        {
            topic: "Computer Organization and Architecture",
            question: "What is the purpose of the ALU (Arithmetic Logic Unit) in a CPU?",
            options: ["To perform arithmetic and logical operations", "To manage memory access", "To control input and output devices", "To store temporary data"],
            answer: 0,
        },
        {
            topic: "Computer Organization and Architecture",
            question: "What is the primary function of an instruction set architecture (ISA)?",
            options: ["To define the programming language of a CPU", "To establish communication between different components of a computer", "To set the clock speed of a CPU", "To define the operations that a CPU can perform"],
            answer: 3,
        },

        // Topic 4: Operating Systems
        {
            topic: "Operating Systems",
            question: "What is the purpose of an operating system?",
            options: ["To execute application programs", "To manage computer hardware and software resources", "To design computer networks", "To perform complex calculations"],
            answer: 1,
        },
        {
            topic: "Operating Systems",
            question: "Which of the following is not a function of an operating system?",
            options: ["Memory management", "File system management", "Web browsing", "Process management"],
            answer: 2,
        },
        {
            topic: "Operating Systems",
            question: "What is virtual memory?",
            options: ["A memory management technique that combines RAM and hard drive space", "A type of memory used in virtual reality systems", "A memory module used in modern computers", "A technique for managing multiple CPUs"],
            answer: 0,
        },
        {
            topic: "Operating Systems",
            question: "What is a device driver?",
            options: ["Software that allows the operating system to communicate with hardware devices", "A type of computer mouse", "A tool for managing file systems", "A component of the CPU"],
            answer: 0,
        },
        {
            topic: "Operating Systems",
            question: "What is the kernel of an operating system?",
            options: ["The central part of an operating system that manages memory and devices", "A security feature that protects against malware", "The graphical user interface (GUI) of an operating system", "A type of file system"],
            answer: 0,
        },

        // Topic 5: Databases
        {
            topic: "Databases",
            question: "What is a relational database?",
            options: ["A database that only supports numeric data", "A database that stores data in tables and establishes relationships between them", "A database used for backup purposes", "A database designed for geographical data"],
            answer: 1,
        },
        {
            topic: "Databases",
            question: "What is SQL?",
            options: ["Structured Language", "Superior Query Language", "Standard Query Language", "Sequential Query Language"],
            answer: 2,
        },
        {
            topic: "Databases",
            question: "What is the primary key in a relational database table?",
            options: ["The first column of the table", "A unique identifier for each row in the table", "The last column of the table", "A column with the most data"],
            answer: 1,
        },
        {
            topic: "Databases",
            question: "What is the purpose of a foreign key in a relational database?",
            options: ["To represent primary data", "To establish a link between two tables", "To store large binary data", "To perform complex calculations"],
            answer: 1,
        },
        {
            topic: "Databases",
            question: "What is normalization in the context of databases?",
            options: ["The process of organizing data to reduce redundancy", "The process of converting data into numerical form", "The process of creating database backups", "The process of indexing data for faster retrieval"],
            answer: 0,
        },

        // Topic 6: Software Engineering
        {
            topic: "Software Engineering",
            question: "What is the purpose of version control in software development?",
            options: ["To track changes in the code and collaborate with others", "To compile the source code into machine code", "To create graphical user interfaces", "To perform code analysis"],
            answer: 0,
        },
        {
            topic: "Software Engineering",
            question: "What is the Agile software development methodology?",
            options: ["A set of guidelines for optimizing database performance", "A framework for managing software projects with an iterative and incremental approach", "A programming language", "A security testing tool"],
            answer: 1,
        },
        {
            topic: "Software Engineering",
            question: "What is a code review?",
            options: ["A review of the software design document", "A meeting to discuss project timelines", "An assessment of the code quality by peers", "A process of generating executable code"],
            answer: 2,
        },
        {
            topic: "Software Engineering",
            question: "What is the purpose of unit testing in software development?",
            options: ["To test the entire application as a whole", "To validate that the system meets the specified requirements", "To test individual units or components of the software", "To analyze the security vulnerabilities of the code"],
            answer: 2,
        },
        {
            topic: "Software Engineering",
            question: "What is the Software Development Life Cycle (SDLC)?",
            options: ["A process for testing software before release", "A framework for managing software projects", "The process of writing source code", "A model for developing hardware components"],
            answer: 1,
        },

        // Topic 7: Artificial Intelligence
        {
            topic: "Artificial Intelligence",
            question: "What is machine learning?",
            options: ["A type of computer memory", "The process of writing code without errors", "A branch of artificial intelligence that focuses on systems that can learn from data", "A technique for optimizing database performance"],
            answer: 2,
        },
        {
            topic: "Artificial Intelligence",
            question: "What is a neural network?",
            options: ["A network of computers in different locations", "A network that simulates the human brain and is used in machine learning", "A network security protocol", "A type of web development framework"],
            answer: 1,
        },
        {
            topic: "Artificial Intelligence",
            question: "What is natural language processing (NLP)?",
            options: ["A technique for translating programming languages", "A method for processing data in a natural human language", "A process of cleaning and organizing data", "A model for designing user interfaces"],
            answer: 1,
        },
        {
            topic: "Artificial Intelligence",
            question: "What is reinforcement learning?",
            options: ["A type of machine learning that relies on rewards and punishments", "A method for testing software applications", "A technique for optimizing algorithms", "A framework for managing project resources"],
            answer: 0,
        },
        {
            topic: "Artificial Intelligence",
            question: "What is the Turing test in the context of artificial intelligence?",
            options: ["A test for assessing the performance of a computer's graphics card", "A test to evaluate the speed of a computer processor", "A test to determine if a machine exhibits human-like intelligence", "A test for validating software security measures"],
            answer: 2,
        },

        // Topic 8: Web Development
        {
            topic: "Web Development",
            question: "Which of the following is a server-side JavaScript runtime environment?",
            options: ["Java", "Node.js", "Python", "Ruby"],
            answer: 1,
        },
        {
            topic: "Web Development",
            question: "What does CSS stand for in the context of web development?",
            options: ["Counter Style Sheet", "Cascading Style Sheet", "Computer Style Sheet", "Colorful Style Sheet"],
            answer: 1,
        },
        {
            topic: "Web Development",
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<a>", "<h>", "<p>", "<link>"],
            answer: 0,
        },
        {
            topic: "Web Development",
            question: "What is the purpose of the JavaScript function 'addEventListener'?",
            options: ["Adding two numbers", "Handling events", "Creating animations", "Styling elements"],
            answer: 1,
        },
        {
            topic: "Web Development",
            question: "Which of the following is a front-end framework for building user interfaces?",
            options: ["Express.js", "Django", "React", "Flask"],
            answer: 2,
        },

        // Topic 9: Cybersecurity
        {
            topic: "Cybersecurity",
            question: "What is the primary goal of encryption in cybersecurity?",
            options: ["Data destruction", "Data concealment", "Data duplication", "Data compression"],
            answer: 1,
        },
        {
            topic: "Cybersecurity",
            question: "Which of the following is an example of a strong password?",
            options: ["password123", "abc123", "P@ssw0rd!", "letmein"],
            answer: 2,
        },
        {
            topic: "Cybersecurity",
            question: "What is a 'firewall' in the context of cybersecurity?",
            options: ["A physical barrier in a building", "A security officer at the entrance", "A software or hardware that filters network traffic", "An antivirus program"],
            answer: 2,
        },
        {
            topic: "Cybersecurity",
            question: "What is a 'phishing' attack?",
            options: ["A physical break-in", "A fraudulent attempt to obtain sensitive information", "A type of malware", "A denial-of-service attack"],
            answer: 1,
        },
        {
            topic: "Cybersecurity",
            question: "What is the purpose of a VPN in cybersecurity?",
            options: ["Virtual Private Network", "Visual Processing Unit", "Variable Programming Network", "Virtual Processing Node"],
            answer: 0,
        },

        // Topic 10: Human-Computer Interaction
        {
            topic: "Human-Computer Interaction",
            question: "What is the goal of usability testing in HCI?",
            options: ["To evaluate the performance of computer hardware", "To assess the user-friendliness of a system", "To measure the speed of internet connections", "To analyze the security of a software application"],
            answer: 1,
        },
        {
            topic: "Human-Computer Interaction",
            question: "Which of the following is a principle of user interface design?",
            options: ["Obscurity", "Consistency", "Complexity", "Ambiguity"],
            answer: 1,
        },
        {
            topic: "Human-Computer Interaction",
            question: "What is 'accessibility' in the context of HCI?",
            options: ["The speed of a computer system", "The ease of understanding software documentation", "The ability of a system to be used by people with disabilities", "The security features of a software application"],
            answer: 2,
        },
        {
            topic: "Human-Computer Interaction",
            question: "What is the purpose of A/B testing in user interface design?",
            options: ["To test the stability of a software application", "To compare two versions of a design to see which performs better", "To assess the compatibility of software with different devices", "To measure the speed of user interactions"],
            answer: 1,
        },
        {
            topic: "Human-Computer Interaction",
            question: "What does 'GUI' stand for?",
            options: ["Graphical User Interface", "General User Interaction", "Global Unit Integration", "Graphical Unit Interface"],
            answer: 0,
        }


        // Add more quiz questions as needed

    ];

    useEffect(() => {
        if (currentQuestion === 11) {
            // If the user has answered "Yes" to all topics, generate quiz questions
            setQuizQuestions(generateQuizQuestions());
        }
    }, [currentQuestion]);

    return (
        <>
            <div className="chatscreen">
                <div className="chatcontainer w-100 h-100 bg-dark">
                    <div className="chatbox h-100">
                        <div className="question bg-dark">{renderQuestion()}</div>
                        <div className="option d-flex flex-column pt-5">
                            {currentQuestion === 1 && (
                                <>
                                    <button onClick={() => handleAnswer('CSE')}>CSE</button>
                                </>
                            )}
                            {currentQuestion >= 2 && currentQuestion <= 11 && (
                                <>
                                    <label className='chat w-100'>

                                        <input type="button" className='w-100 mb-3' name="interested" value="Yes" onClick={() => handleAnswer('Yes')} />
                                    </label>
                                    <label className='chat w-100'>

                                        <input type="button" className='w-100 mb-3' name="interested" value="No" onClick={() => handleAnswer('No')} />
                                    </label>
                                </>
                            )}
                            {currentQuestion === 12 && (
                                <>
                                    {quizQuestions[currentQuizQuestionIndex].options.map((option, index) => (
                                        <button key={index} onClick={() => handleAnswer(option)}>
                                            {option}
                                        </button>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='temp'>
                {topicMarks}
               <div className='box'>
               <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Introduction to Computer science and programming</span>
                    <ParentComponent a={topicMarks[0] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">DSA</span>
                    <ParentComponent a={topicMarks[1] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Computer Organisation</span>
                    <ParentComponent a={topicMarks[2] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Operating System</span>
                    <ParentComponent a={topicMarks[3] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Database</span>
                    <ParentComponent a={topicMarks[4] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Software Engineering</span>
                    <ParentComponent a={topicMarks[5] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Web Development</span>
                    <ParentComponent a={topicMarks[6] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Artificial Intelligence</span>
                    <ParentComponent a={topicMarks[7] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Cybersecurity</span>
                    <ParentComponent a={topicMarks[8] * 20} /></div>
                <div className='d-flex flex-inline align-items-center'><span className="col-lg-3">Human Computer Interaction</span>
                    <ParentComponent a={topicMarks[9] * 20} /></div>

               </div>
            </div>
        </>
    );
};

export default Chat;