// Pattern Data
const patternData = {
    bridge: {
        name: "Bridge Pattern",
        icon: "🌉",
        participants: [
            "Abstraction: Top-level interface for the client, has reference to Implementor object",
            "Refined Abstraction: Extends Abstraction, provides detailed control to client",
            "Implementor: Defines interface for implementation classes (primitive operations)",
            "Concrete Implementor: Provides specific implementation for Implementor interface"
        ],
        interaction: "Abstraction delegates client requests to its Implementor object, allowing independent development of both hierarchies.",
        applicability: [
            "You want to avoid permanent connection between abstraction and implementation",
            "You need to change object's implementation at runtime",
            "Class and implementation need to be extended through different subclasses",
            "Abstraction and implementation should be separated in class hierarchy"
        ],
        consequences: [
            "✅ Decoupled Abstraction and Implementation: Complete separation, independent variation",
            "✅ Improved Extensibility: Both hierarchies can be extended independently",
            "✅ Hides Implementation Details: Client only interacts with Abstraction"
        ]
    },
    decorator: {
        name: "Decorator Pattern",
        icon: "🎨",
        participants: [
            "Component: Interface for core object that will be decorated",
            "Concrete Component: Basic foundational object to which responsibilities are added",
            "Decorator: Abstract class holding reference to Component, conforms to Component interface",
            "Concrete Decorator: Adds new responsibilities/behavior to Component it decorates"
        ],
        interaction: "ConcreteDecorator forwards requests to wrapped Component, adding behavior before/after.",
        applicability: [
            "You need to add responsibilities to individual objects dynamically and transparently",
            "Adding new behavior through flexible composition is better than static inheritance"
        ],
        consequences: [
            "✅ More flexible than static inheritance: Behavior added at runtime",
            "✅ Avoids explosion of classes: Prevents many subclasses for every combination",
            "❌ Can be complex to debug: Multiple layers make debugging harder"
        ]
    },
    memento: {
        name: "Memento Pattern",
        icon: "💾",
        participants: [
            "Originator: Object whose state is being saved, creates/uses Memento",
            "Memento: Object holding snapshot of Originator's internal state (token)",
            "Caretaker: Responsible for storing/retrieving mementos without inspecting contents"
        ],
        interaction: "Originator creates Memento, passes to Caretaker for storage. Caretaker returns Memento to Originator for restoration.",
        applicability: [
            "Object's state needs to be saved for later restoration",
            "Exposing object's internal state would violate encapsulation"
        ],
        consequences: [
            "✅ Preserves encapsulation: State saved externally without exposing internal structure",
            "✅ Simplifies Originator: Doesn't need to manage own history",
            "❌ Potentially high overhead: Large states/many mementos consume memory"
        ]
    },
    state: {
        name: "State Pattern",
        icon: "🔄",
        participants: [
            "Context: Maintains reference to ConcreteState, provides public interface",
            "State: Interface defining behavior for particular state",
            "Concrete State: Implements State interface, provides specific behavior for one state"
        ],
        interaction: "Context delegates requests to current ConcreteState, which handles request and can transition Context to different state.",
        applicability: [
            "Object's behavior depends on state and needs to change at runtime",
            "Operations have large multi-part conditional statements depending on object's state"
        ],
        consequences: [
            "✅ Localizes state-specific behavior: All behavior for specific state isolated in own class",
            "✅ Simplifies Context: No more if/else or switch/case statements",
            "❌ Encourages many small classes: Can lead to large number of classes with many states"
        ]
    },
    observer: {
        name: "Observer Pattern",
        icon: "🕰️",
        participants: [
            "Subject: Object being observed, maintains list of observers and attach/detach interface",
            "Observer: Interface for objects needing notification of subject changes",
            "Concrete Subject: Specific subject maintaining state, notifying observers of changes",
            "Concrete Observer: Specific observer notified by subject, updates own state by querying subject"
        ],
        interaction: "Concrete Subject's notify() calls update() on all attached Concrete Observer objects.",
        applicability: [
            "Change to one object requires changing others, unknown how many objects need changing",
            "Subject and Observers should be loosely coupled, varying independently"
        ],
        consequences: [
            "✅ Abstracts coupling: Subject and observer not directly linked, promoting loose coupling",
            "✅ Allows dynamic updates: Observers can be added/removed at runtime",
            "❌ Unexpected updates: Subject has no knowledge of what Observer will do"
        ]
    },
    facade: {
        name: "Facade Pattern",
        icon: "🏢",
        participants: [
            "Facade: Single class providing simplified, unified interface to complex subsystem",
            "Subsystem classes: Individual classes within complex subsystem performing actual work"
        ],
        interaction: "Client interacts with Facade, which delegates requests to appropriate Subsystem classes.",
        applicability: [
            "You need to provide simpler interface to complex subsystem",
            "You want to reduce coupling between clients and subsystem classes",
            "You want to introduce layering to system"
        ],
        consequences: [
            "✅ Shields clients from subsystem components: Simplifies client code",
            "✅ Promotes weak coupling: Client only coupled to Facade",
            "✅ Doesn't prevent direct access: Clients can still access subsystem classes if needed"
        ]
    },
    mediator: {
        name: "Mediator Pattern",
        icon: "🗂️",
        participants: [
            "Mediator: Defines interface for communicating with Colleague objects",
            "Concrete Mediator: Implements Mediator interface, coordinates Colleague objects",
            "Colleague: Each class knows its Mediator, communicates with it instead of other Colleagues"
        ],
        interaction: "Colleague sends message to Mediator when event occurs. Mediator decides which other Colleagues need notification and forwards message.",
        applicability: [
            "Set of objects communicate in complex, tightly coupled ways",
            "You need to encapsulate complex object interactions"
        ],
        consequences: [
            "✅ Reduces subclassing of Colleagues: Loosely coupled, reusable in different contexts",
            "✅ Centralizes control: Mediator encapsulates communication logic",
            "❌ Can be monolithic object: Mediator can become overly complex with many interactions"
        ]
    }
};

// Quiz Questions Database
const quizQuestions = [
    // Bridge Pattern Questions
    {
        type: "mcq",
        pattern: "bridge",
        question: "A design pattern that decouples an abstraction from its implementation so they can vary independently is the:",
        options: ["Decorator", "Bridge", "Facade", "State"],
        correct: 1,
        explanation: "The Bridge pattern decouples an abstraction from its implementation, allowing them to vary independently."
    },
    {
        type: "mcq",
        pattern: "bridge",
        question: "Which design pattern provides a unified, higher-level interface to a complex subsystem?",
        options: ["Bridge", "Decorator", "Memento", "Facade"],
        correct: 3,
        explanation: "The Facade pattern provides a simplified interface to a complex subsystem."
    },
    {
        type: "mcq",
        pattern: "bridge",
        question: "The primary purpose of the Bridge pattern is to:",
        options: [
            "Add responsibilities to an object dynamically",
            "Encapsulate how a set of objects interact",
            "Decouple an abstraction from its implementation",
            "Provide a single interface to a complex system"
        ],
        correct: 2,
        explanation: "The Bridge pattern decouples an abstraction from its implementation."
    },
    {
        type: "mcq",
        pattern: "bridge",
        question: "A consequence of the Bridge pattern is that it:",
        options: [
            "Can lead to a monolithic Implementor class.",
            "Can be memory-intensive due to the creation of many objects.",
            "Decouples the abstraction from the implementation, allowing them to vary independently.",
            "Increases the number of direct dependencies between classes."
        ],
        correct: 2,
        explanation: "The Bridge pattern decouples the abstraction from the implementation, allowing them to vary independently."
    },
    {
        type: "mcq",
        pattern: "bridge",
        question: "Which pattern is best suited for providing a simplified entry point to a complex library of classes without preventing clients from using the full library if they choose?",
        options: ["Bridge", "Facade", "Mediator", "Decorator"],
        correct: 1,
        explanation: "The Facade pattern provides a simplified interface to a complex subsystem without preventing direct access."
    },
    {
        type: "tf",
        pattern: "bridge",
        question: "The Bridge pattern can be used to hide the implementation details of a class from its client.",
        correct: true,
        explanation: "True. The Bridge pattern hides implementation details from the client."
    },
    {
        type: "tf",
        pattern: "bridge",
        question: "The Bridge pattern is best suited for scenarios where you need to add functionality to an object at runtime.",
        correct: false,
        explanation: "False. That's the Decorator pattern. The Bridge pattern is for decoupling abstraction from implementation."
    },
    {
        type: "tf",
        pattern: "bridge",
        question: "The Bridge pattern is used when you want a permanent abstraction-implementation binding.",
        correct: false,
        explanation: "False. The Bridge pattern is used to avoid permanent abstraction-implementation binding."
    },

    // Decorator Pattern Questions
    {
        type: "mcq",
        pattern: "decorator",
        question: "Which of the following is a key reason to use the Decorator pattern over static inheritance?",
        options: [
            "It centralizes communication between objects.",
            "It allows for the dynamic addition of responsibilities to individual objects.",
            "It simplifies a complex subsystem.",
            "It provides a permanent abstraction-implementation binding."
        ],
        correct: 1,
        explanation: "The Decorator pattern allows for the dynamic addition of responsibilities to individual objects."
    },
    {
        type: "mcq",
        pattern: "decorator",
        question: "In the Decorator pattern, a Concrete Decorator's PrintAnimal() method would typically:",
        options: [
            "Directly replace the decorated object's behavior",
            "Call the decorated object's method first, then add its own behavior",
            "Only call its own method, ignoring the decorated object",
            "Interact with a central mediator object"
        ],
        correct: 1,
        explanation: "The decorator calls the decorated object's method first, then adds its own behavior."
    },
    {
        type: "mcq",
        pattern: "decorator",
        question: "What is the primary motivation for using the Decorator pattern over static inheritance?",
        options: [
            "To simplify a complex subsystem",
            "To provide a central point of communication",
            "To preserve encapsulation",
            "To dynamically add responsibilities to individual objects at runtime"
        ],
        correct: 3,
        explanation: "The Decorator pattern allows dynamic addition of responsibilities at runtime."
    },
    {
        type: "tf",
        pattern: "decorator",
        question: "The Decorator pattern is a behavioral pattern because it adds new functionality to an object at runtime.",
        correct: false,
        explanation: "False. The Decorator pattern is a structural pattern, not a behavioral pattern."
    },
    {
        type: "tf",
        pattern: "decorator",
        question: "The Decorator pattern promotes flexibility over static inheritance.",
        correct: true,
        explanation: "True. The Decorator pattern provides more flexibility than static inheritance."
    },
    {
        type: "tf",
        pattern: "decorator",
        question: "The Decorator pattern is often referred to as 'static inheritance' because it adds responsibilities at compile-time.",
        correct: false,
        explanation: "False. The Decorator pattern is dynamic, not static inheritance."
    },

    // Memento Pattern Questions
    {
        type: "mcq",
        pattern: "memento",
        question: "The primary participant in the Memento pattern responsible for storing and managing a collection of saved states is the:",
        options: ["Originator", "Memento", "Caretaker", "Concrete State"],
        correct: 2,
        explanation: "The Caretaker is responsible for storing and managing mementos without inspecting their contents."
    },
    {
        type: "mcq",
        pattern: "memento",
        question: "The Caretaker in the Memento pattern is responsible for:",
        options: [
            "Creating a snapshot of the Originator's state",
            "Restoring the Originator's state from a Memento",
            "Storing and managing a list of Memento objects without inspecting their contents",
            "Directly modifying the internal state of the Originator"
        ],
        correct: 2,
        explanation: "The Caretaker stores and manages mementos without inspecting their contents."
    },
    {
        type: "mcq",
        pattern: "memento",
        question: "The Memento pattern helps to preserve what key principle of object-oriented design?",
        options: ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
        correct: 2,
        explanation: "The Memento pattern preserves encapsulation by externalizing state without exposing internal structure."
    },
    {
        type: "mcq",
        pattern: "memento",
        question: "In the Memento pattern, what principle is preserved because only the Originator can access a Memento's internal state?",
        options: ["Inheritance", "Abstraction", "Encapsulation", "Polymorphism"],
        correct: 2,
        explanation: "The Memento pattern preserves encapsulation because only the Originator can access the Memento's internal state."
    },
    {
        type: "mcq",
        pattern: "memento",
        question: "What is the key drawback of the Memento pattern?",
        options: [
            "It requires large conditional statements.",
            "It promotes tight coupling.",
            "Mementos can be memory-intensive due to the amount of state they copy.",
            "It is less flexible than static inheritance."
        ],
        correct: 2,
        explanation: "Mementos can be memory-intensive due to the amount of state they copy."
    },
    {
        type: "tf",
        pattern: "memento",
        question: "The Memento pattern is also known as the Token pattern.",
        correct: true,
        explanation: "True. The Memento pattern is also called the Token pattern."
    },
    {
        type: "tf",
        pattern: "memento",
        question: "A consequence of the Memento pattern is that it can simplify the Originator class.",
        correct: true,
        explanation: "True. The Memento pattern simplifies the Originator by removing the need to manage its own history."
    },
    {
        type: "tf",
        pattern: "memento",
        question: "The Caretaker in the Memento pattern does not operate on or examine the contents of a memento.",
        correct: true,
        explanation: "True. The Caretaker stores and manages mementos without inspecting their contents."
    },
    {
        type: "tf",
        pattern: "memento",
        question: "The Memento pattern simplifies the Originator by shifting the responsibility of state management to the Caretaker.",
        correct: true,
        explanation: "True. The Memento pattern shifts state management responsibility to the Caretaker."
    },

    // State Pattern Questions
    {
        type: "mcq",
        pattern: "state",
        question: "The State pattern is most applicable when an object's behavior:",
        options: [
            "Needs to be saved and restored.",
            "Is defined by its relationships with other objects.",
            "Depends on its internal state, leading to large conditional statements.",
            "Is permanently bound to its implementation."
        ],
        correct: 2,
        explanation: "The State pattern is used when an object's behavior depends on its internal state, leading to large conditional statements."
    },
    {
        type: "mcq",
        pattern: "state",
        question: "Which pattern is an alternative to using large conditional statements to handle an object's state-dependent behavior?",
        options: ["Bridge", "Decorator", "Facade", "State"],
        correct: 3,
        explanation: "The State pattern replaces complex conditional logic with separate state classes."
    },
    {
        type: "mcq",
        pattern: "state",
        question: "A class that contains an object representing its current state and delegates client requests to that state object is a participant in which pattern?",
        options: ["Observer", "Mediator", "Memento", "State"],
        correct: 3,
        explanation: "This describes the Context class in the State pattern."
    },
    {
        type: "mcq",
        pattern: "state",
        question: "What is the key responsibility of a Concrete State object in the State pattern?",
        options: [
            "To maintain the overall state of the context.",
            "To provide the interface for the context.",
            "To implement the behavior associated with a specific state.",
            "To store and manage a list of mementos."
        ],
        correct: 2,
        explanation: "A Concrete State object implements the behavior associated with a specific state."
    },
    {
        type: "tf",
        pattern: "state",
        question: "The State pattern localizes behavior related to a specific state in its own class.",
        correct: true,
        explanation: "True. Each state's behavior is isolated in its own class."
    },
    {
        type: "tf",
        pattern: "state",
        question: "The Context in the State pattern contains a large if/else statement to handle different states.",
        correct: false,
        explanation: "False. The State pattern eliminates the need for if/else statements."
    },
    {
        type: "tf",
        pattern: "state",
        question: "The State pattern replaces complex conditional logic with separate classes for each state.",
        correct: true,
        explanation: "True. The State pattern replaces conditional logic with separate state classes."
    },
    {
        type: "tf",
        pattern: "state",
        question: "The State pattern can lead to an increase in the number of classes in a system.",
        correct: true,
        explanation: "True. The State pattern can lead to many small classes, one for each state."
    },

    // Observer Pattern Questions
    {
        type: "mcq",
        pattern: "observer",
        question: "The Observer pattern establishes a one-to-many relationship where:",
        options: [
            "Many subjects are observed by a single observer",
            "A subject notifies multiple observers when its state changes",
            "A single observer directly updates a single subject",
            "Observers communicate directly with each other"
        ],
        correct: 1,
        explanation: "The Observer pattern involves one subject notifying multiple observers."
    },
    {
        type: "mcq",
        pattern: "observer",
        question: "In the Observer pattern, a Concrete Observer typically updates its own state by:",
        options: [
            "Directly calling methods on other observers",
            "Having its state set by the Concrete Subject",
            "Querying the Concrete Subject for its new state",
            "Being passed a new state object by the subject"
        ],
        correct: 2,
        explanation: "Observers query the subject to get the new state information."
    },
    {
        type: "mcq",
        pattern: "observer",
        question: "In the Observer pattern, what term describes the relationship between a Subject and its Observers?",
        options: ["Tightly coupled", "Loosely coupled", "Permanently bound", "Tightly bound"],
        correct: 1,
        explanation: "The Observer pattern promotes loosely coupled relationships between Subject and Observers."
    },
    {
        type: "mcq",
        pattern: "observer",
        question: "The Observer pattern is also known as:",
        options: ["Wrapper", "Handle/Body", "Publish-Subscribe", "Token"],
        correct: 2,
        explanation: "The Observer pattern is also known as the Publish-Subscribe pattern."
    },
    {
        type: "tf",
        pattern: "observer",
        question: "The Subject in the Observer pattern is aware of the specific concrete classes of its observers.",
        correct: false,
        explanation: "False. The Subject only knows the Observer interface, not concrete classes."
    },
    {
        type: "tf",
        pattern: "observer",
        question: "The Observer pattern is the core of the Model-View-Controller (MVC) architectural pattern.",
        correct: true,
        explanation: "True. The Observer pattern is fundamental to the MVC architecture."
    },
    {
        type: "tf",
        pattern: "observer",
        question: "In the Observer pattern, a Subject notifies its observers without knowing the concrete types of those observers.",
        correct: true,
        explanation: "True. The Subject only knows the Observer interface, not concrete types."
    },

    // Facade Pattern Questions
    {
        type: "mcq",
        pattern: "facade",
        question: "Which pattern is a structural pattern that provides a simplified, higher-level interface to a complex set of interfaces in a subsystem?",
        options: ["Observer", "Mediator", "Facade", "Memento"],
        correct: 2,
        explanation: "The Facade pattern provides a simplified interface to a complex subsystem."
    },
    {
        type: "mcq",
        pattern: "facade",
        question: "The Facade pattern is most applicable when:",
        options: [
            "You need to save and restore an object's state",
            "An object's behavior needs to change based on its internal state",
            "You want to provide a simple entry point to a complex subsystem",
            "You want to decouple a class hierarchy from its implementation"
        ],
        correct: 2,
        explanation: "The Facade pattern provides a simple interface to a complex subsystem."
    },
    {
        type: "tf",
        pattern: "facade",
        question: "The Facade pattern prevents clients from accessing the subsystem classes directly if they need more specialized functionality.",
        correct: false,
        explanation: "False. The Facade doesn't prevent direct access to subsystem classes."
    },
    {
        type: "tf",
        pattern: "facade",
        question: "The Facade pattern provides a high-level interface to a subsystem, but doesn't prevent clients from using the subsystem's classes directly.",
        correct: true,
        explanation: "True. The Facade provides a simplified interface but doesn't restrict access."
    },
    {
        type: "tf",
        pattern: "facade",
        question: "The Facade pattern is an example of a behavioral design pattern.",
        correct: false,
        explanation: "False. The Facade pattern is a structural pattern, not a behavioral pattern."
    },

    // Mediator Pattern Questions
    {
        type: "mcq",
        pattern: "mediator",
        question: "The primary goal of the Mediator pattern is to:",
        options: [
            "Encapsulate how a set of objects interact, thereby reducing coupling.",
            "Allow an object to change its behavior at runtime.",
            "Save and restore an object's state.",
            "Dynamically add new responsibilities to an object."
        ],
        correct: 0,
        explanation: "The Mediator pattern encapsulates how a set of objects interact, thereby reducing coupling."
    },
    {
        type: "mcq",
        pattern: "mediator",
        question: "The Mediator pattern's main benefit is that it:",
        options: [
            "Makes a complex subsystem easier to use",
            "Centralizes communication between objects, promoting loose coupling",
            "Adds new functionality to an object dynamically",
            "Allows an object to restore a previous state"
        ],
        correct: 1,
        explanation: "The Mediator centralizes communication and promotes loose coupling."
    },
    {
        type: "mcq",
        pattern: "mediator",
        question: "Which pattern would you use to centralize communication among Colleague objects that would otherwise be tightly coupled and difficult to reuse?",
        options: ["Facade", "Observer", "Mediator", "Bridge"],
        correct: 2,
        explanation: "The Mediator pattern centralizes communication among Colleague objects."
    },
    {
        type: "tf",
        pattern: "mediator",
        question: "The Mediator pattern helps to reduce class dependencies by centralizing communication.",
        correct: true,
        explanation: "True. The Mediator reduces dependencies by centralizing communication."
    },
    {
        type: "tf",
        pattern: "mediator",
        question: "Colleague objects in the Mediator pattern communicate directly with each other.",
        correct: false,
        explanation: "False. Colleagues communicate through the Mediator, not directly."
    },
    {
        type: "tf",
        pattern: "mediator",
        question: "The Mediator pattern helps to manage a many-to-many communication relationship between objects.",
        correct: true,
        explanation: "True. The Mediator manages many-to-many communication relationships."
    },
    {
        type: "tf",
        pattern: "mediator",
        question: "The Mediator pattern helps to improve the reusability of Colleague objects.",
        correct: true,
        explanation: "True. The Mediator improves reusability by reducing coupling between Colleagues."
    },

    // General Pattern Questions
    {
        type: "mcq",
        pattern: "general",
        question: "The term 'dynamic binding' is most relevant to which pair of design patterns, as it allows behavior to be resolved at runtime?",
        options: ["Facade and Mediator", "Memento and Bridge", "Decorator and State", "Observer and Memento"],
        correct: 2,
        explanation: "Both Decorator and State patterns use dynamic binding to determine behavior at runtime."
    },
    {
        type: "tf",
        pattern: "general",
        question: "An object's behavior is how it acts or responds to messages.",
        correct: true,
        explanation: "True. An object's behavior is defined as how it acts or responds to messages."
    },
    {
        type: "tf",
        pattern: "general",
        question: "Loosely coupled classes have minimal dependencies on each other.",
        correct: true,
        explanation: "True. Loosely coupled classes have minimal dependencies on each other."
    }
];

// Global Variables
let currentMode = '';
let currentPattern = 'bridge';
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let quizResults = [];

// Mode Selection Functions
function selectMode(mode) {
    currentMode = mode;
    document.getElementById('modeSelection').style.display = 'none';
    
    if (mode === 'study') {
        document.getElementById('studyMode').style.display = 'block';
        showPattern('bridge');
    } else if (mode === 'quiz') {
        document.getElementById('quizMode').style.display = 'block';
    }
}

function showModeSelection() {
    currentMode = '';
    document.getElementById('modeSelection').style.display = 'flex';
    document.getElementById('studyMode').style.display = 'none';
    document.getElementById('quizMode').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
}

// Study Mode Functions
function showPattern(patternName) {
    currentPattern = patternName;
    
    // Update active button
    document.querySelectorAll('.pattern-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load pattern content
    const patternContent = document.getElementById('patternContent');
    const pattern = patternData[patternName];
    
    patternContent.innerHTML = `
        <div class="pattern-section">
            <h3><i class="fas fa-users"></i> Participants and Interactions</h3>
            <ul>
                ${pattern.participants.map(participant => `<li>${participant}</li>`).join('')}
            </ul>
            <p><strong>Interaction:</strong> ${pattern.interaction}</p>
        </div>
        
        <div class="pattern-section">
            <h3><i class="fas fa-check-circle"></i> Applicability</h3>
            <ul>
                ${pattern.applicability.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="pattern-section">
            <h3><i class="fas fa-balance-scale"></i> Consequences</h3>
            <ul>
                ${pattern.consequences.map(consequence => `<li>${consequence}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Quiz Mode Functions
function startQuiz() {
    // Get selected question types and patterns
    const selectedTypes = [];
    if (document.getElementById('mcq').checked) selectedTypes.push('mcq');
    if (document.getElementById('tf').checked) selectedTypes.push('tf');
    
    const selectedPatterns = [];
    // Check all pattern checkboxes including 'general'
    const allPatterns = ['bridge', 'decorator', 'memento', 'state', 'observer', 'facade', 'mediator', 'general'];
    allPatterns.forEach(pattern => {
        if (document.getElementById(pattern).checked) {
            selectedPatterns.push(pattern);
        }
    });
    
    if (selectedTypes.length === 0) {
        alert('Please select at least one question type.');
        return;
    }
    
    if (selectedPatterns.length === 0) {
        alert('Please select at least one pattern.');
        return;
    }
    
    // Filter questions based on selection
    currentQuestions = quizQuestions.filter(q => {
        const typeMatches = selectedTypes.includes(q.type);
        const patternMatches = selectedPatterns.includes(q.pattern);
        return typeMatches && patternMatches;
    });
    
    if (currentQuestions.length === 0) {
        alert('No questions match your selection. Please try different options.');
        return;
    }
    
    // Shuffle questions
    currentQuestions = shuffleArray(currentQuestions);
    
    // Initialize quiz
    currentQuestionIndex = 0;
    userAnswers = [];
    quizResults = [];
    
    // Show quiz container
    document.getElementById('quizSettings').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Load first question
    loadQuestion();
}

function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish' : 'Next';
    
    if (question.type === 'mcq') {
        questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option" onclick="selectOption(${index})" data-index="${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else if (question.type === 'tf') {
        questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    <div class="option" onclick="selectOption(true)" data-value="true">True</div>
                    <div class="option" onclick="selectOption(false)" data-value="false">False</div>
                </div>
            </div>
        `;
    }
    
    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        restoreAnswer();
        // Also restore the feedback for the previous answer
        const previousAnswer = userAnswers[currentQuestionIndex];
        showAnswerFeedback(previousAnswer);
    }
}

function selectOption(selectedAnswer) {
    // Remove previous selection and feedback
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark selected option
    event.target.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = selectedAnswer;
    
    // Show immediate feedback
    showAnswerFeedback(selectedAnswer);
}

function showAnswerFeedback(selectedAnswer) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = question.type === 'mcq' ? 
        selectedAnswer === question.correct : 
        selectedAnswer === question.correct;
    
    // Add visual feedback to the selected option
    const selectedElement = event.target;
    if (isCorrect) {
        selectedElement.classList.add('correct');
        selectedElement.innerHTML += ' <i class="fas fa-check" style="color: #28a745; margin-left: 10px;"></i>';
    } else {
        selectedElement.classList.add('incorrect');
        selectedElement.innerHTML += ' <i class="fas fa-times" style="color: #dc3545; margin-left: 10px;"></i>';
        
        // Show the correct answer
        if (question.type === 'mcq') {
            const correctElement = document.querySelector(`[data-index="${question.correct}"]`);
            correctElement.classList.add('correct');
            correctElement.innerHTML += ' <i class="fas fa-check" style="color: #28a745; margin-left: 10px;"></i>';
        } else {
            const correctElement = document.querySelector(`[data-value="${question.correct}"]`);
            correctElement.classList.add('correct');
            correctElement.innerHTML += ' <i class="fas fa-check" style="color: #28a745; margin-left: 10px;"></i>';
        }
    }
    
    // Show explanation
    showExplanation(question.explanation);
}

function showExplanation(explanation) {
    // Remove existing explanation if any
    const existingExplanation = document.querySelector('.explanation-box');
    if (existingExplanation) {
        existingExplanation.remove();
    }
    
    // Create and show explanation
    const explanationBox = document.createElement('div');
    explanationBox.className = 'explanation-box';
    explanationBox.innerHTML = `
        <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #007bff;">
            <h4 style="margin: 0 0 10px 0; color: #007bff;">
                <i class="fas fa-lightbulb"></i> Explanation
            </h4>
            <p style="margin: 0; color: #495057;">${explanation}</p>
        </div>
    `;
    
    // Insert explanation after the question container
    const questionContainer = document.getElementById('questionContainer');
    questionContainer.appendChild(explanationBox);
}

function restoreAnswer() {
    const question = currentQuestions[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestionIndex];
    
    if (question.type === 'mcq') {
        document.querySelector(`[data-index="${selectedAnswer}"]`).classList.add('selected');
    } else if (question.type === 'tf') {
        document.querySelector(`[data-value="${selectedAnswer}"]`).classList.add('selected');
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    // Calculate results
    let correctAnswers = 0;
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = question.type === 'mcq' ? 
            userAnswer === question.correct : 
            userAnswer === question.correct;
        
        if (isCorrect) correctAnswers++;
        
        quizResults.push({
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.type === 'mcq' ? question.correct : question.correct,
            isCorrect: isCorrect,
            explanation: question.explanation
        });
    });
    
    const score = Math.round((correctAnswers / currentQuestions.length) * 100);
    
    // Show results
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    
    document.getElementById('scoreDisplay').textContent = score + '%';
    
    // Generate results summary
    const resultsSummary = document.getElementById('resultsSummary');
    resultsSummary.innerHTML = `
        <h4>Summary:</h4>
        <p><strong>Total Questions:</strong> ${currentQuestions.length}</p>
        <p><strong>Correct Answers:</strong> ${correctAnswers}</p>
        <p><strong>Incorrect Answers:</strong> ${currentQuestions.length - correctAnswers}</p>
        
        <h4>Question Review:</h4>
        ${quizResults.map((result, index) => `
            <div class="result-item" style="margin-bottom: 20px; padding: 15px; border-radius: 8px; background: ${result.isCorrect ? '#d4edda' : '#f8d7da'}; border-left: 4px solid ${result.isCorrect ? '#28a745' : '#dc3545'};">
                <p><strong>Question ${index + 1}:</strong> ${result.question}</p>
                <p><strong>Your Answer:</strong> ${formatAnswer(result.userAnswer, currentQuestions[index])}</p>
                <p><strong>Correct Answer:</strong> ${formatAnswer(result.correctAnswer, currentQuestions[index])}</p>
                <p><strong>Explanation:</strong> ${result.explanation}</p>
            </div>
        `).join('')}
    `;
}

function formatAnswer(answer, question) {
    if (question.type === 'mcq') {
        return String.fromCharCode(65 + answer) + '. ' + question.options[answer];
    } else {
        return answer ? 'True' : 'False';
    }
}

function retakeQuiz() {
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizSettings').style.display = 'block';
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Show Bridge pattern by default in study mode
    if (currentMode === 'study') {
        showPattern('bridge');
    }
});
