const courses = [
    {
        id: 1,
        title: 'Programming for Everybody (Getting Started with Python)',
        duration: '7 weeks',
        description: 'This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python. The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook "Python for Everybody". Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.',
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: ['What is a program?', 'Using variables in programs', 'Conditional execution (if statements)', 'Repeated execution / looping (for statements)', 'Functions and code reuse'],
        link: 'https://www.edx.org/course/programming-for-everybody-getting-started-with-pyt?index=product&queryID=f134dff14d65cdbb4b403728b3e8bb32&position=1',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/911175d0-6724-4276-a058-c7b052773dd1-aba3108f3ab9.small.png'
    },
    {
        id: 2,
        title: 'How to Code: Simple Data',
        duration: '7 weeks',
        description: 'This programming course takes a unique approach, as it focuses on learning a systematic programming method rather than a programming language. This practical approach will help you channel your creativity so that you can program well in any language.',
        institution: 'The University of British Columbia',
        instructor: 'Gregor Kiczales',
        prerequisites: 'No programming experience required, but many experienced programmers take this course to become better programmers.',
        price: '125 USD',
        learningGoal: [
            'How to represent information as data',
            'How to focus each part of your program on a single task',
            'How to use examples and tests to clarify what your program should do',
            'How to simplify the structure of your program using common patterns',
            'Recognize and represent more complicated information'
        ],
        link: 'https://www.edx.org/course/how-to-code-simple-data?index=product&queryID=c39cf33d56866c5c7c78db08b0c66043&position=1',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/895afa12-6162-420d-a522-9945ddf29011-fb7c4a5e516a.small.jpg'
    },
    {
        id: 3,
        title: 'Python Data Structures',
        duration: '7 weeks',
        description: 'This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook "Python for Everybody". This course covers Python 3.',
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: [
            'How to open a file and read data from a file',
            'How to create a list in Python',
            'How to create a dictionary',
            'Sorting data',
            'How to use the tuple structure in Python'
        ],
        link: 'https://www.edx.org/course/python-data-structures?index=product&queryID=c8e0a0ba49bc6db98d7f0bfca446d2cd&position=1',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/fe0c8b35-8af3-4456-8bd1-029f50dbefe1-d51f3ed9ef55.small.png'
    },
    {
        id: 4,
        title: 'Web Application Technologies and Django',
        duration: '5 weeks',
        description: "In this course, you'll explore the basic structure of a web application, and how a web browser interacts with a web server. You'll be introduced to the Hypertext Transfer Protocol (HTTP) request/response cycle, including GET/POST/Redirect. You'll also gain an introductory understanding of Hypertext Markup Language (HTML), as well as the overall structure of a Django application. We will explore the Model-View-Controller (MVC) pattern for web applications and how it relates to Django. You will learn how to deploy a Django application using a service like PythonAnywhere so that it is available over the Internet.",
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: [
            "Explain the basics of HTTP and how the request-response cycle works",
            'Install and deploy a simple DJango application',
            'Build simple web pages in HTML and style them using CSS',
            'Explain the basic operations in SQL'
        ],
        link: 'https://www.edx.org/course/web-application-technologies-and-django?index=product&queryID=f03dcdc38cbe004ea9d391395de27302&position=12',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/d840294c-0405-4806-9b23-13ba4c75b77b-cd92388f8d85.small.jpeg'
    },
    {
        id: 5,
        title: 'Building Web Applications in Django',
        duration: '4 weeks',
        description: 'In this course, you will learn how Django communicates with a database through model objects. You will explore Object-Relational Mapping (ORM) for database access and how Django models implement this pattern. We will review the Object-Oriented (OO) pattern in Python. You will learn basic Structured Query Language (SQL) and database modeling, including one-to-many and many-to-many relationships and how they work in both the SQL and Django models. You will learn how to use the Django console and scripts to work with your application objects interactively.',
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: [
            'Describe and build a data model in Django',
            'Apply Django model query and template tags/code of Django Template Language (DTL)',
            'Define Class, Instance, Method',
            'Build forms in HTML'
        ],
        link: 'https://www.edx.org/course/building-web-applications-in-django?index=product&queryID=f03dcdc38cbe004ea9d391395de27302&position=13',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/a3186510-c1f0-434a-a22a-93df47bd2a21-3cee14ade137.small.jpeg'
    },
    {
        id: 6,
        title: 'Using JavaScript, JQuery, and JSON in Django',
        duration: '5 weeks',
        description: "In this final course, we'll look at the JavaScript language and how it supports the Object-Oriented pattern, with a focus on the unique aspects of JavaScript's approach to OO. We'll provide an introduction to the jQuery library, which is widely used for in-browser manipulation of the Document Object Model (DOM) and event handling. You'll also learn about JavaScript Object Notation (JSON), which is commonly used as a syntax to exchange data between code running on the server (i.e., in Django) and code running in the browser (JavaScript/jQuery). You will continue to develop your classified ads application, adding features that make use of JavaScript, JQuery, and JSON. This course assumes you have completed the first three courses in the specialization.",
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: [
            'Explain and give examples of many-to-many relationships in data modeling',
            'Write syntactically correct JavaScript language and demonstrate debugging capabilities',
            'Build objects using JavaScript',
            'Explain basic elements of low-level jQuery'
        ],
        link: 'https://www.edx.org/course/using-javascript-jquery-and-json-in-django?index=product&queryID=f03dcdc38cbe004ea9d391395de27302&position=19',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/d3e35219-f37f-4d64-99d1-ee9adb69efb4-159e3ac7fc74.small.jpeg'
    },
    {
        id: 7,
        title: 'Data Science Ethics',
        duration: '4 weeks',
        description: "s patients, we care about the privacy of our medical record; but as patients, we also wish to benefit from the analysis of data in medical records. As citizens, we want a fair trial before being punished for a crime; but as citizens, we want to stop terrorists before they attack us. As decision-makers, we value the advice we get from data-driven algorithms; but as decision-makers, we also worry about unintended bias. Many data scientists learn the tools of the trade and get down to work right away, without appreciating the possible consequences of their work. This course focused on ethics specifically related to data science will provide you with the framework to analyze these concerns. This framework is based on ethics, which are shared values that help differentiate right from wrong. Ethics are not law, but they are usually the basis for laws. Everyone, including data scientists, will benefit from this course. No previous knowledge is needed.",
        institution: 'University of Michigan',
        instructor: 'H. V. Jagadish',
        prerequisites: 'The ability to think critically about the impact of one\'s decisions.',
        price: '49 USD',
        learningGoal: [
            'Who owns data',
            'How we value different aspects of privacy',
            'How we get informed consent',
            'What it means to be fair'
        ],
        link: "https://www.edx.org/course/data-science-ethics?index=product&queryID=f03dcdc38cbe004ea9d391395de27302&position=22",
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/01d6a025-0edf-4e03-9e3f-bfeca1fd1658-710258d40f3a.small.jpg'
    },
    {
        id: 8,
        title: 'Django Features and Libraries',
        duration: '6 weeks',
        description: "In this course, you will learn how to build Django-based web applications suitable for use by end users. You will learn about cookies, sessions, and authentication processes in Django. You will build navigation into your applications and explore ways to easily improve the look and feel of Django applications. You will begin to develop a simple application to support a classified ads website that will walk you through many of the issues and techniques that you encounter in website development. You will also learn how to move an application from development to production.",
        institution: 'University of Michigan',
        instructor: 'Charles Severance',
        prerequisites: 'None',
        price: '49 USD',
        learningGoal: [
            'Define Django sessions and how cookies are used to support sessions',
            'Apply built-in login functionality in Django and manage login users in views',
            'Define one-to-many models and demonstrate how to represent links in a database',
            'Create, edit, and delete form flow inside of a generic edit view'
        ],
        link: 'https://www.edx.org/course/django-features-and-libraries?index=product&queryID=f03dcdc38cbe004ea9d391395de27302&position=24',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/8f9d9f6f-daa0-451e-9a2c-b9ce747d3ac7-03c656a04313.small.jpeg'
    },
    {
        id: 9,
        title: 'Computing in Python III: Data Structures',
        duration: '5 weeks',
        description: 'Build on your existing knowledge of conditionals, loops, and functions by studying more about complex Python data structures, including strings, lists, dictionaries, and file input and output.',
        institution: 'The Georgia Institute of Technology',
        instructor: "David Joyner",
        prerequisites: "CS1301xII or equivalent knowledge is required. Certain problems may benefit from experience with algebra, geometry, pre-calculus, and trigonometry, but you can succeed without these.",
        price: '149 USD',
        learningGoal: [
            'Strings, including advanced string methods.',
            'Tuples and lists, including multi-dimensional lists.',
            'File input and output, including multiple modes for file access.',
            'Dictionaries, including replicating object-oriented reasoning using dictionaries.',
            'Using control structures with data structures, such as looping over lists or error handling with files.'
        ],
        link: 'https://www.edx.org/course/computing-in-python-iii-data-structures?index=product&queryID=e3d92c47ddd5904433e285053fd8aee9&position=2',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/c41c076c-4944-4974-ae73-cdba2f76f7ce-64e6625225b8.small.jpg'
    },
    {
        id: 10,
        title: "Computing in Python IV: Objects & Algorithms",
        duration: '5 weeks',
        description: "Complete your introductory knowledge of computer science with this final course on objects and algorithms. Now that you've learned about complex control structures and data structures, learn to develop programs that more intuitively leverage your natural understanding of problems through object-oriented programming. Then, learn to analyze the complexity and efficiency of these programs through algorithms. In addition, certify your broader knowledge of Introduction to Computing with a comprehensive exam. By the end of this course, you'll be able to write programs in Python that leverage your more natural understanding of data structures by creating objects to represent the structures you work with most often. For example, if you were creating a class roster application, you'll learn how to create an object representing a student's name, ID number, and attendance record. Then, you'll be able to create applications that leverage sorting and searching algorithms to sort that roster alphabetically, search for a particular student, and evaluate the efficiency of both those operations. Structurally, the course is comprised of several parts. Instruction is delivered via a series of short (2-3 minute) videos. In between those videos, you'll complete both multiple choice questions and coding problems to demonstrate your knowledge of the material that was just covered. These exercises count for 20% of your grade. Then, after each major chapter, you'll complete a problem set of collected, more challenging problems. These count for 40% of your grade. Finally, you'll complete a final course exam, which counts for the remaining 40% of your grade.",
        institution: 'The Georgia Institute of Technology',
        instructor: "David Joyner",
        prerequisites: "CS1301xIII or equivalent knowledge is required. Certain problems may benefit from experience with algebra, geometry, pre-calculus, and trigonometry, but you can succeed without these.",
        price: "149 USD",
        learningGoal: [
            'Working with instances of objects in Python.',
            'Creating new data structures using object-oriented programming.',
            'Using objects with earlier control and data structures.',
            'Writing common search algorithms, like linear and binary search.',
            'Writing common sorting algorithms, like bubble sort, insertion sort, and merge sort.',
            'Evaluating the computational complexity of algorithms using Big O notation.'
        ],
        link: 'https://www.edx.org/course/computing-in-python-iv-objects-algorithms?index=product&queryID=3f863512a790d6da02468f0afed86257&position=3',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/382aaed7-05e3-486d-9867-f890242eb648-fabb844ba847.small.jpg'
    },
    {
        id: 11,
        title: 'Advanced Algorithmics and Graph Theory with Python',
        duration: '6 weeks',
        description: "Algorithmics and programming are fundamental skills for engineering students, data scientists and analysts, computer hobbyists or developers. Learning how to program algorithms can be tedious if you aren???t given an opportunity to immediately practice what you learn. In this course, you won't justfocus on theoryor study a simple catalog of methods, procedures, and concepts. Instead, you???ll be given a challenge wherein you'll be asked to beat an algorithm we???ve written for you by coming up with your own clever solution. To be specific, you???ll have to work out a route faster than your opponent through a maze while picking up objects. Each week, you will learn new material to improve your artificial intelligence in order to beat your opponent. This structure means that as a learner, you???ll confront each abstract notion with a real-world problem. We???ll go over data-structures, basic and advanced algorithms for graph theory, complexity/accuracy trade-offs, and even combinatorial game theory. This coursehas received financial support from the Patrick and Lina Drahi Foundation.",
        institution: 'Institut Mines-T??l??com ',
        instructor: 'Vincent Gripon, Patrick Meyer, Nicolas Farrugia',
        prerequisites: "Some familiarity with Python 3 and basic mathematics.",
        price: "49 USD",
        learningGoal: [
            "Ways to express a computational problem (such as pathfinding) using graph theory",
            "How to choose the appropriate algorithm to solve the given computational problem",
            "How to code the algorithmic solution in python",
            "Methods for evaluating the proposed solution in terms of its complexity (amount of resources, scalability) or performance (accuracy, latency)"
        ],
        link: "https://www.edx.org/course/advanced-algorithmics-and-graph-theory-with-python?index=product&queryID=3f863512a790d6da02468f0afed86257&position=5",
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/4cad72ef-0a40-4eee-bd1b-e3d1834e26eb-531b6c8deb39.small.png'
    },
    {
        id: 12,
        title: "Data Structures: An Active Learning Approach",
        duration: "10 weeks",
        description: "This interactive text used in this course was written with the intention of teaching Computer Science students about various data structures as well as the applications in which each data structure would be appropriate to use. It is currently being taught at the University of California, San Diego (UCSD), the University of San Diego (USD), and the University of Puerto Rico (UPR). This coursework utilizes the Active Learning approach to instruction, meaning it has various activities embedded throughout to help stimulate your learning and improve your understanding of the materials we will cover. You will encounter \"STOP and Think\" questions that will help you reflect on the material, \"Exercise Breaks\" that will test your knowledge and understanding of the concepts discussed, and \"Code Challenges\" that will allow you to actually implement some of the algorithms we will cover. Currently, all code challenges are in C++ or Python, but the vast majority of the content is language-agnostic theory of complexity and algorithm analysis. In other words, even without C++ or Python knowledge, the key takeaways can still be obtained.",
        institution: 'University of Michigan',
        instructor: "Niema Moshiri, Christine Alvarado, Liz Izhikevich",
        prerequisites: "Reading and understanding pseudocode, Performing time-complexity analysis using Big-O notation,Working with basic probabilities, Following formal mathematical proofs, Programming in either C++ or Python",
        price: "50 USD",
        learningGoal: [
            'The algorithms behind fundamental data structures (dynamic arrays, linked structures, (un)balanced trees/tries, graph algorithms, hash tables/functions)',
            'How to reason about appropriate data structures to solve problems, including their strengths and weaknesses',
            'How to analyze algorithms theoretically (worst-case, average-case, and amortized)',
            'The key distinctions and relations between "Abstract Data Types" and "Data Structures"',
            'Basic information theory and data compression utilizing the data structures covered'
        ],
        link: 'https://www.edx.org/course/data-structures-an-active-learning-approach?index=product&queryID=3f863512a790d6da02468f0afed86257&position=6',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/db4a9bb6-0ece-4edf-a7d2-3295ce022fb7-0e8aa0ed7a15.small.jpg'
    },
    {
        id: 13,
        title: 'How to Code: Complex Data',
        duration: '6 weeks',
        description: "As your program requirements get more complex, you will find that simple additions to the design method make it easy to write well-structured and well-tested code that is easy to maintain. By learning how to capture common data and control structures using abstraction, your programs will get shorter and better tested. Building on the core methods from How to Code: Simple Data, this programming course, part of the Software Development MicroMasters program, quickly expands to cover more complex programs on more complex data. Towards the end of the course, you will design programs that even experienced developers would find challenging. You will also learn how to design search programs. You will design a program to solve Sudoku puzzles, and will be able to design many other puzzle solvers as well. Learners who enroll in the Verified track will receive staff grading for the course project and increased interaction with the instructor and staff.",
        institution: 'The University of British Columbia',
        instructor: 'Gregor Kiczales',
        prerequisites: 'How to Code: Simple Data',
        price: '125 USD',
        learningGoal: [
            'How to identify commonalities in data definitions and functions',
            'How to avoid repetition using abstraction',
            'How to design functions that operate on graphs',
            'How to design programs that search a given problem space to find a valid solution'
        ],
        link: 'https://www.edx.org/course/how-to-code-complex-data?index=product&queryID=eeaff539a6778e1b050dabab0cb6a8ed&position=2',
        img: 'https://prod-discovery.edx-cdn.org/media/course/image/c2a2d51b-4841-46aa-b149-e7d1a64b6298-47cd7c0a9390.small.jpg'
    },
]