# Additional Practice Questions for Final Exam

## Multiple Choice Questions

### Bridge Pattern
1. **Q**: Which of the following best describes the relationship between Abstraction and Implementor in the Bridge pattern?
   - a. The Abstraction creates the Implementor
   - **b. The Abstraction delegates to the Implementor**
   - c. The Implementor controls the Abstraction
   - d. They are tightly coupled

2. **Q**: The Bridge pattern is most useful when:
   - a. You need to add functionality to objects at runtime
   - **b. You want to avoid permanent binding between abstraction and implementation**
   - c. You need to save and restore object state
   - d. You want to simplify a complex subsystem

### Decorator Pattern
3. **Q**: Which design pattern would be most suitable for creating a flexible logging system that can add features like timestamps, file writing, or encryption to a basic logging object at runtime?
   - a. Mediator
   - **b. Decorator**
   - c. Facade
   - d. Memento

4. **Q**: In the Decorator pattern, both the Component and Decorator conform to the same interface. The primary reason for this is to:
   - a. Make it easier to create concrete decorators
   - **b. Allow decorators to be wrapped around other decorators**
   - c. Simplify the Concrete Component
   - d. Reduce the number of classes needed

### Memento Pattern
5. **Q**: The Memento is a "token" in the sense that:
   - a. It is a public object that can be read by any client
   - **b. Only the Originator that created it can access its internal state**
   - c. It is directly managed by the Context object
   - d. It is a temporary object that is deleted immediately after use

6. **Q**: The Memento pattern is often described as a way to externalize an object's state without violating encapsulation. This means:
   - a. The Caretaker has full access to the Memento's internal data
   - **b. The Originator can restore its state, but other objects cannot access or modify the saved state**
   - c. The Caretaker directly modifies the Originator's internal variables
   - d. The Originator's state is stored in a publicly accessible variable

### State Pattern
7. **Q**: In the State pattern, the Context object's main responsibility is to:
   - a. Define the behavior for a specific state
   - **b. Provide a client interface and maintain the current state**
   - c. Implement all the logic for every possible state
   - d. Transition between states without help from the ConcreteState classes

8. **Q**: The State pattern is a behavioral pattern because it:
   - a. Provides a unified interface to a subsystem
   - **b. Allows an object to change its behavior when its internal state changes**
   - c. Decouples an abstraction from its implementation
   - d. Adds new responsibilities to an object dynamically

### Observer Pattern
9. **Q**: Which of the following best describes the relationship between a Subject and its Observers?
   - a. They are tightly coupled, with the Subject having direct knowledge of its Observers' concrete types
   - b. The Observers communicate directly with each other to coordinate updates
   - **c. They are loosely coupled, with the Subject only knowing a generic Observer interface**
   - d. The Observers poll the Subject periodically for changes

10. **Q**: The term "dynamic binding" is most closely associated with which of the following patterns, as it allows behavior to be determined at runtime?
    - a. Facade and Mediator
    - b. Memento and Bridge
    - **c. Decorator and State**
    - d. Observer and Facade

### Facade Pattern
11. **Q**: A company wants to build a new payment processing system. They have a complex set of classes for handling credit cards, gift cards, and loyalty points. They want to provide a simple processPayment() method for their clients. Which pattern is best suited for this?
    - a. Bridge
    - b. Decorator
    - **c. Facade**
    - d. State

12. **Q**: The main benefit of using a Facade is that:
    - a. It allows clients to access the subsystem classes directly
    - **b. It provides a simplified entry point to a complex subsystem**
    - c. It adds new responsibilities to an object at runtime
    - d. It separates an abstraction from its implementation

### Mediator Pattern
13. **Q**: In a system where different GUI components (e.g., buttons, text boxes) need to communicate with each other without knowing their specific types, which pattern would you use to manage these interactions centrally?
    - a. Observer
    - **b. Mediator**
    - c. Facade
    - d. Memento

14. **Q**: A key difference between the Mediator and Observer patterns is that the Mediator pattern:
    - a. Allows objects to communicate directly with each other
    - **b. Centralizes communication, whereas the Observer pattern involves a one-to-many broadcast**
    - c. Is a structural pattern, while the Observer is a behavioral pattern
    - d. Is used to restore an object to a previous state

### General Concepts
15. **Q**: What is the main drawback of the Memento pattern?
    - a. It requires a lot of conditional logic
    - **b. Mementos can consume a significant amount of memory**
    - c. It tightly couples the originator and caretaker
    - d. It violates the originator's encapsulation

## True or False Questions

### Bridge Pattern
1. **Q**: The Bridge pattern is best suited for scenarios where you need to add functionality to an object at runtime.
   - **Answer: False** (That's the Decorator pattern)

2. **Q**: The Bridge pattern can be used to hide implementation details from the client.
   - **Answer: True**

### Decorator Pattern
3. **Q**: The Decorator pattern is often referred to as a "Wrapper" because it "wraps" an object to add new behavior.
   - **Answer: True**

4. **Q**: Using the Decorator pattern is an example of static inheritance.
   - **Answer: False** (It's dynamic composition)

### Memento Pattern
5. **Q**: A potential drawback of the Memento pattern is the hidden costs associated with a Caretaker storing and managing a potentially large collection of mementos.
   - **Answer: True**

6. **Q**: The Memento pattern can be memory-intensive if the Originator's state is large.
   - **Answer: True**

### State Pattern
7. **Q**: The State pattern replaces complex conditional logic with separate classes for each state.
   - **Answer: True**

8. **Q**: A consequence of the State pattern is that it simplifies the Context object, but it can lead to a large number of ConcreteState classes.
   - **Answer: True**

### Observer Pattern
9. **Q**: The Observer pattern is also known as the Publish-Subscribe pattern.
   - **Answer: True**

10. **Q**: The Observer pattern allows for dynamic binding of observers at runtime.
    - **Answer: True**

### Facade Pattern
11. **Q**: A Facade class typically has to maintain the state of the individual subsystem classes it manages.
    - **Answer: False** (The Facade doesn't maintain state, it just provides a simplified interface)

12. **Q**: The Facade pattern is a behavioral pattern because it is concerned with the communication between objects.
    - **Answer: False** (It's a structural pattern)

### Mediator Pattern
13. **Q**: The Mediator pattern helps to manage and simplify a many-to-many communication relationship between objects.
    - **Answer: True**

14. **Q**: A key benefit of the Mediator pattern is that it reduces the number of direct dependencies between colleague objects.
    - **Answer: True**

### General Concepts
15. **Q**: Loosely coupled classes are generally easier to reuse and maintain than tightly coupled classes.
    - **Answer: True**

16. **Q**: The Mediator pattern and the Observer pattern both address the issue of complex communication between objects, but the Observer pattern focuses on a one-to-many relationship, while the Mediator pattern centralizes many-to-many relationships.
    - **Answer: True**

17. **Q**: An object's behavior can be defined as how it acts or responds to messages from other objects.
    - **Answer: True**

18. **Q**: In the Bridge pattern, the Abstraction and Implementor can be extended independently without affecting the client.
    - **Answer: True**

## Pattern Comparison Questions

### Multiple Choice
1. **Q**: Which pattern would you use if you wanted to add logging functionality to an existing object without modifying its code?
   - a. Bridge
   - **b. Decorator**
   - c. Facade
   - d. Mediator

2. **Q**: Which pattern would you use if you had a complex subsystem and wanted to provide a simple interface for clients?
   - a. Bridge
   - b. Decorator
   - **c. Facade**
   - d. Observer

3. **Q**: Which pattern would you use if you wanted to save and restore an object's state without exposing its internal structure?
   - a. Bridge
   - b. Decorator
   - **c. Memento**
   - d. State

4. **Q**: Which pattern would you use if you wanted to change an object's behavior based on its internal state?
   - a. Bridge
   - b. Decorator
   - c. Memento
   - **d. State**

5. **Q**: Which pattern would you use if you wanted to notify multiple objects when one object's state changes?
   - a. Bridge
   - b. Decorator
   - c. Facade
   - **d. Observer**

### True or False
6. **Q**: The Decorator pattern is a good choice when you need to add responsibilities to an entire class hierarchy rather than to individual objects.
   - **Answer: False** (Decorator is for individual objects, not entire hierarchies)

7. **Q**: The Observer pattern is more suitable for one-to-many relationships, while the Mediator pattern is better for many-to-many relationships.
   - **Answer: True**

8. **Q**: The Bridge pattern and the Facade pattern both aim to simplify complex systems, but they do so in different ways.
   - **Answer: True**

## Application Scenario Questions

### Multiple Choice
1. **Q**: You're building a text editor that needs to support different themes (dark, light, high contrast). The themes affect how text is displayed, but the core editing functionality remains the same. Which pattern would you use?
   - a. Decorator
   - **b. Bridge**
   - c. State
   - d. Observer

2. **Q**: You're creating a notification system where users can subscribe to different types of alerts (email, SMS, push notifications). When an event occurs, all subscribed users should be notified. Which pattern would you use?
   - a. Mediator
   - b. Facade
   - **c. Observer**
   - d. State

3. **Q**: You're building a game where a character can be in different states (idle, walking, running, jumping). The character's behavior changes based on its current state. Which pattern would you use?
   - a. Bridge
   - b. Decorator
   - **c. State**
   - d. Memento

4. **Q**: You're developing a coffee shop ordering system with a complex backend (inventory, payment processing, order tracking). You want to provide a simple `placeOrder()` method for the frontend. Which pattern would you use?
   - a. Bridge
   - b. Decorator
   - **c. Facade**
   - d. Observer

5. **Q**: You're creating a GUI application where buttons, text fields, and other components need to communicate with each other (e.g., a button click affects a text field). Which pattern would you use to manage these interactions?
   - a. Observer
   - **b. Mediator**
   - c. Facade
   - d. State

### True or False
6. **Q**: The Memento pattern would be useful for implementing an "undo" feature in a text editor.
   - **Answer: True**

7. **Q**: The Decorator pattern would be useful for adding features like encryption or compression to a file I/O system.
   - **Answer: True**

8. **Q**: The State pattern would be useful for modeling a vending machine that behaves differently based on whether it has money, is dispensing, or is out of stock.
   - **Answer: True**

9. **Q**: The Observer pattern would be useful for implementing a stock market ticker that updates multiple displays when stock prices change.
   - **Answer: True**

10. **Q**: The Facade pattern would be useful for providing a simple interface to a complex database system with multiple tables and relationships.
    - **Answer: True**

---

## Quick Review Checklist

Before your exam, make sure you can:

- [ ] Identify all participants in each pattern
- [ ] Explain how participants interact in each pattern
- [ ] List when to use each pattern (applicability)
- [ ] Describe the benefits and drawbacks of each pattern
- [ ] Distinguish between similar patterns (e.g., Observer vs Mediator)
- [ ] Understand key terminology (coupling, encapsulation, dynamic binding, etc.)
- [ ] Apply patterns to real-world scenarios
- [ ] Answer practice questions correctly

**Good luck with your final exam!** 🎓
