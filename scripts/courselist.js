const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]


//displaying courses
const container = document.querySelector(".classes");

function displayCourses(filteredCourses) {
    container.innerHTML = "";

    filteredCourses.forEach(course => {
        const a = document.createElement("a");
        a.innerHTML = `${course.subject} ${course.number}`;
        if (course.completed == true) {
            a.classList.add("completed");
        } else {
            a.classList.add("uncompleted");
        }

        container.appendChild(a);
    });
}

displayCourses(courses);

//filtering courses
document.querySelector(".buttons button:nth-child(1)").addEventListener("click", () => displayCourses(courses));
document.querySelector(".buttons button:nth-child(2)").addEventListener("click", () => {
    const filteredCSE = courses.filter(course => course.subject === "CSE");
    displayCourses(filteredCSE);
});
document.querySelector(".buttons button:nth-child(3)").addEventListener("click", () => {
    const filteredWDD = courses.filter(course => course.subject === "WDD");
    displayCourses(filteredWDD);
});

//Adding total of credits
const totalCredits = courses.reduce((total, course) => total + course.credits, 0);
const btnAll = document.querySelector(".buttons button:nth-child(1)");
btnAll.textContent += ` (${totalCredits}) Credits`;

const totalCreditsCSE = (courses.filter(course => course.subject === "CSE")).reduce((total, course) => total + course.credits, 0);
const btnCSE = document.querySelector(".buttons button:nth-child(2)");
btnCSE.textContent += ` (${totalCreditsCSE}) Credits`;

const totalCreditswdd = (courses.filter(course => course.subject === "WDD")).reduce((total, course) => total + course.credits, 0);
const btnWDD = document.querySelector(".buttons button:nth-child(3)");
btnWDD.textContent += ` (${totalCreditsCSE}) Credits`;


// Adding courseDetails

const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

container.addEventListener("click", () => {
    displayCourseDetails(course);
})

