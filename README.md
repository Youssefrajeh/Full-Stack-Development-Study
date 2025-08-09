# Design Patterns Quiz & Study Application

A comprehensive web-based application for learning and testing knowledge of software design patterns. Built with HTML5, CSS3, and JavaScript (ES6+), this application provides an interactive study environment and quiz system for mastering software design patterns.

## 🚀 Features

### Study Mode
- **Interactive Pattern Browser**: Click through different design patterns to study
- **Detailed Information**: Each pattern includes participants, interactions, applicability, and consequences
- **Visual Organization**: Clean, card-based layout with icons and structured content
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### Quiz Mode
- **Customizable Questions**: Select specific patterns and question types
- **Multiple Question Types**: Multiple choice and True/False questions
- **Immediate Feedback**: Instant visual feedback with correct/incorrect indicators
- **Detailed Explanations**: Explanations appear after each answer
- **Progress Tracking**: Visual progress bar and question counter
- **Results Summary**: Comprehensive results with score and question review
- **Randomized Questions**: Questions are shuffled for variety

### Covered Design Patterns
- 🌉 **Bridge Pattern**: Decoupling abstraction from implementation
- 🎨 **Decorator Pattern**: Dynamic responsibility addition
- 💾 **Memento Pattern**: State preservation and restoration
- 🔄 **State Pattern**: Behavior based on internal state
- 🕰️ **Observer Pattern**: One-to-many dependency relationships
- 🏢 **Facade Pattern**: Simplified subsystem interface
- 🗂️ **Mediator Pattern**: Centralized object communication

## 📱 How to Use

### Getting Started
1. Open `index.html` in your web browser
2. Choose between **Study Mode** or **Quiz Mode**
3. Start learning or testing your knowledge!

### Study Mode
1. Click "Study Mode" from the main menu
2. Select a design pattern from the navigation buttons
3. Read through participants, interactions, applicability, and consequences
4. Use the back button to return to the main menu

### Quiz Mode
1. Click "Quiz Mode" from the main menu
2. Select question types (Multiple Choice, True/False)
3. Choose which patterns to include in your quiz
4. Click "Start Quiz" to begin
5. Answer questions and receive immediate feedback
6. Review your results and explanations
7. Retake the quiz or return to the main menu

## 🛠️ Technical Stack

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and quiz logic
- **Font Awesome**: Icons for enhanced visual experience
- **Google Fonts**: Typography (Inter font family)

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
Design-Patterns-Quiz/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality and quiz logic
├── README.md           # Project documentation
└── Additional_Practice_Questions.md  # Extra study materials
```

## 🎨 Design Features

### User Experience
- **Intuitive Navigation**: Clear menu structure and back buttons
- **Visual Feedback**: Color-coded correct/incorrect answers
- **Progress Indicators**: Progress bars and question counters
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions

### Accessibility
- **Keyboard Navigation**: Tab through interactive elements
- **Screen Reader Friendly**: Semantic HTML structure
- **High Contrast**: Clear color schemes for readability
- **Font Scaling**: Responsive typography

## 📊 Quiz Features

### Question Types
- **Multiple Choice**: 4 options per question
- **True/False**: Binary choice questions

### Feedback System
- **Immediate Response**: Instant correct/incorrect indicators
- **Visual Icons**: Checkmarks (✅) and X marks (❌)
- **Color Coding**: Green for correct, red for incorrect
- **Explanation Box**: Detailed explanations after each answer

### Results System
- **Score Calculation**: Percentage-based scoring
- **Question Review**: Detailed breakdown of all answers
- **Statistics**: Total questions, correct/incorrect counts
- **Retake Option**: Start a new quiz with different settings

## 🔧 Customization

### Adding New Questions
To add new questions, edit the `quizQuestions` array in `script.js`:

```javascript
{
    type: "mcq", // or "tf" for true/false
    pattern: "bridge", // pattern category
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"], // for mcq only
    correct: 1, // index of correct answer (0-based for mcq, true/false for tf)
    explanation: "Detailed explanation of the answer."
}
```

### Adding New Patterns
To add new design patterns, update the `patternData` object in `script.js`:

```javascript
newPattern: {
    name: "New Pattern Name",
    icon: "🎯",
    participants: ["Participant 1", "Participant 2"],
    interaction: "How participants interact",
    applicability: ["When to use this pattern"],
    consequences: ["Benefits and drawbacks"]
}
```

### Styling Customization
- Modify `styles.css` to change colors, fonts, and layout
- Update CSS variables for consistent theming
- Adjust responsive breakpoints for different screen sizes

## 🚀 Deployment

### Local Development
1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development server: `python -m http.server 8000`
4. Access at `http://localhost:8000`

### Web Hosting
- Upload all files to any web hosting service
- No server-side dependencies required
- Works with static file hosting (GitHub Pages, Netlify, etc.)

## 📚 Learning Resources

### Included Study Materials
- **Pattern Descriptions**: Detailed explanations of each pattern
- **Practice Questions**: 50+ questions covering all patterns
- **Visual Aids**: Icons and structured content for better retention

### Additional Resources
- **Design Patterns Book**: "Design Patterns: Elements of Reusable Object-Oriented Software"
- **Online Tutorials**: Various design pattern tutorials and examples
- **Practice Projects**: Implement patterns in real code examples

## 🤝 Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Areas for Improvement
- Add more question types (matching, fill-in-the-blank)
- Implement user accounts and progress tracking
- Add pattern comparison features
- Create pattern implementation examples
- Add dark mode theme

## 📄 License

This project is open source.

## 👨‍💻 Author

**Youssef Rajeh**  
Created for INFO 3137 – Software Design Patterns course.

## 🎯 Learning Objectives

This application helps students:
- **Understand Design Patterns**: Learn the core concepts and applications
- **Practice Recognition**: Identify patterns in different scenarios
- **Test Knowledge**: Assess understanding through interactive quizzes
- **Review Concepts**: Access detailed explanations and examples
- **Build Confidence**: Practice with immediate feedback and explanations

---

**Happy Learning! 🎓**

