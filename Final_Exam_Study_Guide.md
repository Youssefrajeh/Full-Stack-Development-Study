# Final Exam Review Study Guide
## Software Design Patterns

---

## 📚 Table of Contents
1. [Bridge Pattern](#bridge-pattern)
2. [Decorator Pattern](#decorator-pattern)
3. [Memento Pattern](#memento-pattern)
4. [State Pattern](#state-pattern)
5. [Observer Pattern](#observer-pattern)
6. [Facade Pattern](#facade-pattern)
7. [Mediator Pattern](#mediator-pattern)
8. [Key Terminology](#key-terminology)
9. [Practice Questions](#practice-questions)

---

## 🌉 Bridge Pattern

### Participants and Interactions
- **Abstraction**: Top-level interface for the client, has reference to Implementor object
- **Refined Abstraction**: Extends Abstraction, provides detailed control to client
- **Implementor**: Defines interface for implementation classes (primitive operations)
- **Concrete Implementor**: Provides specific implementation for Implementor interface

**Interaction**: Abstraction delegates client requests to its Implementor object, allowing independent development of both hierarchies.

### Applicability
Use when:
- You want to avoid permanent connection between abstraction and implementation
- You need to change object's implementation at runtime
- Class and implementation need to be extended through different subclasses
- Abstraction and implementation should be separated in class hierarchy

### Consequences
- ✅ **Decoupled Abstraction and Implementation**: Complete separation, independent variation
- ✅ **Improved Extensibility**: Both hierarchies can be extended independently
- ✅ **Hides Implementation Details**: Client only interacts with Abstraction

---

## 🎨 Decorator Pattern

### Participants and Interactions
- **Component**: Interface for core object that will be decorated
- **Concrete Component**: Basic foundational object to which responsibilities are added
- **Decorator**: Abstract class holding reference to Component, conforms to Component interface
- **Concrete Decorator**: Adds new responsibilities/behavior to Component it decorates

**Interaction**: ConcreteDecorator forwards requests to wrapped Component, adding behavior before/after.

### Applicability
Use when:
- You need to add responsibilities to individual objects dynamically and transparently
- Adding new behavior through flexible composition is better than static inheritance

### Consequences
- ✅ **More flexible than static inheritance**: Behavior added at runtime
- ✅ **Avoids explosion of classes**: Prevents many subclasses for every combination
- ❌ **Can be complex to debug**: Multiple layers make debugging harder

---

## 💾 Memento Pattern

### Participants and Interactions
- **Originator**: Object whose state is being saved, creates/uses Memento
- **Memento**: Object holding snapshot of Originator's internal state (token)
- **Caretaker**: Responsible for storing/retrieving mementos without inspecting contents

**Interaction**: Originator creates Memento, passes to Caretaker for storage. Caretaker returns Memento to Originator for restoration.

### Applicability
Use when:
- Object's state needs to be saved for later restoration
- Exposing object's internal state would violate encapsulation

### Consequences
- ✅ **Preserves encapsulation**: State saved externally without exposing internal structure
- ✅ **Simplifies Originator**: Doesn't need to manage own history
- ❌ **Potentially high overhead**: Large states/many mementos consume memory

---

## 🔄 State Pattern

### Participants and Interactions
- **Context**: Maintains reference to ConcreteState, provides public interface
- **State**: Interface defining behavior for particular state
- **Concrete State**: Implements State interface, provides specific behavior for one state

**Interaction**: Context delegates requests to current ConcreteState, which handles request and can transition Context to different state.

### Applicability
Use when:
- Object's behavior depends on state and needs to change at runtime
- Operations have large multi-part conditional statements depending on object's state

### Consequences
- ✅ **Localizes state-specific behavior**: All behavior for specific state isolated in own class
- ✅ **Simplifies Context**: No more if/else or switch/case statements
- ❌ **Encourages many small classes**: Can lead to large number of classes with many states

---

## 🕰️ Observer Pattern

### Participants and Interactions
- **Subject**: Object being observed, maintains list of observers and attach/detach interface
- **Observer**: Interface for objects needing notification of subject changes
- **Concrete Subject**: Specific subject maintaining state, notifying observers of changes
- **Concrete Observer**: Specific observer notified by subject, updates own state by querying subject

**Interaction**: Concrete Subject's notify() calls update() on all attached Concrete Observer objects.

### Applicability
Use when:
- Change to one object requires changing others, unknown how many objects need changing
- Subject and Observers should be loosely coupled, varying independently

### Consequences
- ✅ **Abstracts coupling**: Subject and observer not directly linked, promoting loose coupling
- ✅ **Allows dynamic updates**: Observers can be added/removed at runtime
- ❌ **Unexpected updates**: Subject has no knowledge of what Observer will do

---

## 🏢 Facade Pattern

### Participants and Interactions
- **Facade**: Single class providing simplified, unified interface to complex subsystem
- **Subsystem classes**: Individual classes within complex subsystem performing actual work

**Interaction**: Client interacts with Facade, which delegates requests to appropriate Subsystem classes.

### Applicability
Use when:
- You need to provide simpler interface to complex subsystem
- You want to reduce coupling between clients and subsystem classes
- You want to introduce layering to system

### Consequences
- ✅ **Shields clients from subsystem components**: Simplifies client code
- ✅ **Promotes weak coupling**: Client only coupled to Facade
- ✅ **Doesn't prevent direct access**: Clients can still access subsystem classes if needed

---

## 🗂️ Mediator Pattern

### Participants and Interactions
- **Mediator**: Defines interface for communicating with Colleague objects
- **Concrete Mediator**: Implements Mediator interface, coordinates Colleague objects
- **Colleague**: Each class knows its Mediator, communicates with it instead of other Colleagues

**Interaction**: Colleague sends message to Mediator when event occurs. Mediator decides which other Colleagues need notification and forwards message.

### Applicability
Use when:
- Set of objects communicate in complex, tightly coupled ways
- You need to encapsulate complex object interactions

### Consequences
- ✅ **Reduces subclassing of Colleagues**: Loosely coupled, reusable in different contexts
- ✅ **Centralizes control**: Mediator encapsulates communication logic
- ❌ **Can be monolithic object**: Mediator can become overly complex with many interactions

---

## 📖 Key Terminology

### Core Concepts
- **State**: Internal condition/data of object at particular moment
- **Coupling**: Degree to which one class is connected to/depends on another
  - **Tightly coupled**: Classes highly dependent, difficult to change/reuse independently
  - **Loosely coupled**: Classes independent, minimal dependencies
  - **Decoupled**: Complete separation (Bridge pattern)
- **Subsystem**: Group of classes working together for specific function
- **Dynamic binding**: Determining method to call at runtime (Decorator, State patterns)
- **Static inheritance**: Method implementation resolved at compile time
- **Permanent abstraction-implementation binding**: Direct, unchanging link between interface and implementation
- **Object responsibilities**: Specific tasks/functions object is designed to perform
- **Object behavior**: How object acts/responds to messages
- **Encapsulation boundaries**: Separation of internal state/implementation from outside world
- **Class dependencies**: When one class relies on another to function correctly
- **Reusability**: Ability to use class/component in multiple contexts

---

## 🧠 Practice Questions

### Multiple Choice Questions

#### Bridge Pattern
1. **Q**: Which design pattern provides a unified, higher-level interface to a complex subsystem?
   - a. Bridge b. Decorator c. Memento **d. Facade**

2. **Q**: The primary purpose of the Bridge pattern is to:
   - a. Add responsibilities to an object dynamically
   - b. Encapsulate how a set of objects interact
   - **c. Decouple an abstraction from its implementation**
   - d. Provide a single interface to a complex system

#### Decorator Pattern
3. **Q**: In the Decorator pattern, a Concrete Decorator's PrintAnimal() method would typically:
   - a. Directly replace the decorated object's behavior
   - **b. Call the decorated object's method first, then add its own behavior**
   - c. Only call its own method, ignoring the decorated object
   - d. Interact with a central mediator object

4. **Q**: What is the primary motivation for using the Decorator pattern over static inheritance?
   - a. To simplify a complex subsystem
   - b. To provide a central point of communication
   - c. To preserve encapsulation
   - **d. To dynamically add responsibilities to individual objects at runtime**

#### Memento Pattern
5. **Q**: The Caretaker in the Memento pattern is responsible for:
   - a. Creating a snapshot of the Originator's state
   - b. Restoring the Originator's state from a Memento
   - **c. Storing and managing a list of Memento objects without inspecting their contents**
   - d. Directly modifying the internal state of the Originator

6. **Q**: The Memento pattern helps to preserve what key principle of object-oriented design?
   - a. Polymorphism b. Inheritance **c. Encapsulation** d. Abstraction

#### State Pattern
7. **Q**: Which pattern is an alternative to using large conditional statements to handle an object's state-dependent behavior?
   - a. Bridge b. Decorator c. Facade **d. State**

8. **Q**: A class that contains an object representing its current state and delegates client requests to that state object is a participant in which pattern?
   - a. Observer b. Mediator c. Memento **d. State**

#### Observer Pattern
9. **Q**: The Observer pattern establishes a one-to-many relationship where:
   - a. Many subjects are observed by a single observer
   - **b. A subject notifies multiple observers when its state changes**
   - c. A single observer directly updates a single subject
   - d. Observers communicate directly with each other

10. **Q**: In the Observer pattern, a Concrete Observer typically updates its own state by:
    - a. Directly calling methods on other observers
    - b. Having its state set by the Concrete Subject
    - **c. Querying the Concrete Subject for its new state**
    - d. Being passed a new state object by the subject

#### Facade Pattern
11. **Q**: The Facade pattern is most applicable when:
    - a. You need to save and restore an object's state
    - b. An object's behavior needs to change based on its internal state
    - **c. You want to provide a simple entry point to a complex subsystem**
    - d. You want to decouple a class hierarchy from its implementation

#### Mediator Pattern
12. **Q**: The Mediator pattern's main benefit is that it:
    - a. Makes a complex subsystem easier to use
    - **b. Centralizes communication between objects, promoting loose coupling**
    - c. Adds new functionality to an object dynamically
    - d. Allows an object to restore a previous state

### True or False Questions

#### Bridge Pattern
1. **Q**: The Bridge pattern can be used to hide implementation details from the client.
   - **Answer: True**

2. **Q**: A key benefit of the Bridge pattern is that it helps to manage a class hierarchy that would otherwise grow too large and complex.
   - **Answer: True**

#### Decorator Pattern
3. **Q**: The Decorator pattern is a behavioral pattern.
   - **Answer: False** (It's a structural pattern)

4. **Q**: The Decorator pattern promotes flexibility over static inheritance.
   - **Answer: True**

#### Memento Pattern
5. **Q**: The Memento pattern is also known as the Token pattern.
   - **Answer: True**

6. **Q**: A consequence of the Memento pattern is that it can simplify the Originator class.
   - **Answer: True**

#### State Pattern
7. **Q**: The State pattern localizes behavior related to a specific state in its own class.
   - **Answer: True**

8. **Q**: The Context in the State pattern contains a large if/else statement to handle different states.
   - **Answer: False** (The State pattern eliminates the need for if/else statements)

#### Observer Pattern
9. **Q**: The Subject in the Observer pattern is aware of the specific concrete classes of its observers.
   - **Answer: False** (It only knows the Observer interface)

10. **Q**: The Observer pattern is the core of the Model-View-Controller (MVC) architectural pattern.
    - **Answer: True**

#### Facade Pattern
11. **Q**: The Facade pattern prevents clients from accessing the subsystem classes directly if they need more functionality.
    - **Answer: False** (It doesn't prevent direct access)

12. **Q**: The Facade pattern provides a high-level interface to a subsystem, but doesn't prevent clients from using the subsystem's classes directly.
    - **Answer: True**

#### Mediator Pattern
13. **Q**: The Mediator pattern helps to reduce class dependencies by centralizing communication.
    - **Answer: True**

14. **Q**: Colleague objects in the Mediator pattern communicate directly with each other.
    - **Answer: False** (They communicate through the Mediator)

#### General Concepts
15. **Q**: The term "coupling" refers to the degree of dependency between classes.
    - **Answer: True**

---

## 🎯 Quick Reference Summary

| Pattern | Purpose | Key Benefit | Main Drawback |
|---------|---------|-------------|---------------|
| **Bridge** | Decouple abstraction from implementation | Independent variation | Can be complex |
| **Decorator** | Add responsibilities dynamically | Runtime flexibility | Debugging complexity |
| **Memento** | Save/restore object state | Preserves encapsulation | Memory overhead |
| **State** | Change behavior based on state | Eliminates conditionals | Many small classes |
| **Observer** | One-to-many notifications | Loose coupling | Unexpected updates |
| **Facade** | Simplify complex subsystem | Easy client interface | Doesn't prevent direct access |
| **Mediator** | Centralize object communication | Reduces dependencies | Can become monolithic |

---

## 📝 Study Tips

1. **Focus on Participants**: Know the role of each participant in each pattern
2. **Understand Interactions**: How do the participants communicate/work together?
3. **Know Applicability**: When should you use each pattern?
4. **Consequences**: What are the benefits and drawbacks?
5. **Practice Questions**: Test your understanding with the provided questions
6. **Compare Patterns**: Understand the differences between similar patterns (e.g., Observer vs Mediator)

**Good luck on your final exam!** 🍀
