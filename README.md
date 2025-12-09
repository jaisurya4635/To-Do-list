# TaskFlow - Modern To-Do Application

A beautiful, feature-rich to-do list application built with **React.js** to demonstrate front-end framework fundamentals. This project showcases core React concepts including components, state management, hooks, and event handling.

![TaskFlow App](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.8-purple) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Create new tasks with a clean, intuitive interface
- ✏️ **Edit Tasks** - Inline editing with keyboard shortcuts (Enter to save, Escape to cancel)
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- ✓ **Toggle Completion** - Mark tasks as complete/incomplete with custom checkboxes
- 💾 **Local Storage** - Automatically saves your tasks to browser storage
- 🔍 **Filter Tasks** - View All, Active, or Completed tasks
- 📊 **Statistics Dashboard** - Track your progress with real-time stats

### Design & UX
- 🎨 **Modern Dark Theme** - Sleek, eye-catching design with vibrant gradients
- ✨ **Smooth Animations** - Micro-animations for enhanced user experience
- 🌈 **Glassmorphism Effects** - Premium UI with backdrop blur and transparency
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⌨️ **Keyboard Support** - Full keyboard navigation and shortcuts
- 🎯 **Accessible** - ARIA labels and semantic HTML

## 🚀 Technologies Used

- **React 18.2** - Modern React with hooks
- **Vite 5.0** - Lightning-fast build tool
- **CSS3** - Custom design system with CSS variables
- **Local Storage API** - Client-side data persistence

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd "d:\intern project\Front End Framework"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
Front End Framework/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx      # Input form component
│   │   ├── TodoList.jsx       # List container component
│   │   ├── TodoItem.jsx       # Individual task component
│   │   ├── FilterTabs.jsx     # Filter navigation component
│   │   └── StatsBar.jsx       # Statistics display component
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles & design system
├── index.html                 # HTML template
├── package.json               # Dependencies & scripts
└── vite.config.js            # Vite configuration
```

## 🎯 React Concepts Demonstrated

### 1. **Component Architecture**
- Functional components with clear separation of concerns
- Reusable, modular component design
- Props for parent-child communication

### 2. **State Management**
- `useState` hook for local component state
- Lifting state up to parent components
- State updates with immutable patterns

### 3. **Side Effects**
- `useEffect` hook for localStorage synchronization
- Dependency arrays for controlled re-renders

### 4. **Event Handling**
- Form submissions
- Click events
- Keyboard events (Enter, Escape)
- Blur events for auto-save

### 5. **Conditional Rendering**
- Dynamic UI based on state
- Empty state handling
- Filter-based rendering

### 6. **Lists & Keys**
- Efficient list rendering with unique keys
- Array methods (map, filter, reduce)

## 💡 Key Features Explained

### Add Tasks
Type your task in the input field and click "Add Task" or press Enter. The task appears at the top of the list with a timestamp.

### Edit Tasks
Click the ✏️ edit button to enter edit mode. Make your changes and press Enter to save or Escape to cancel.

### Complete Tasks
Click the checkbox next to any task to mark it as complete. Completed tasks show with a strikethrough and reduced opacity.

### Filter Tasks
Use the filter tabs to view:
- **All** - Shows all tasks
- **Active** - Shows only incomplete tasks
- **Completed** - Shows only completed tasks

Each tab displays the count of tasks in that category.

### Statistics
The stats bar at the bottom shows:
- Total number of tasks
- Number of active tasks
- Number of completed tasks
- Completion percentage

### Data Persistence
All tasks are automatically saved to your browser's localStorage. Your tasks will persist even after closing the browser!

## 🎨 Design System

The application uses a comprehensive design system with:
- **Color Palette**: HSL-based colors for easy theming
- **Spacing System**: Consistent spacing scale (xs to 3xl)
- **Typography**: Inter font family with size scale
- **Border Radius**: Consistent rounded corners
- **Shadows**: Layered shadow system for depth
- **Transitions**: Smooth animations with cubic-bezier easing

## 📱 Responsive Design

The app is fully responsive with breakpoints at:
- **Desktop**: > 768px (full layout)
- **Tablet**: 768px (adjusted spacing)
- **Mobile**: < 480px (stacked layout)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌟 Learning Outcomes

By building this project, you'll learn:

1. **React Fundamentals**
   - Component creation and composition
   - Props and state management
   - React hooks (useState, useEffect)
   - Event handling in React

2. **Modern JavaScript**
   - ES6+ syntax (arrow functions, destructuring, spread operator)
   - Array methods (map, filter, reduce)
   - Template literals
   - Ternary operators

3. **Web APIs**
   - localStorage for data persistence
   - Date API for timestamps

4. **CSS Skills**
   - CSS variables for theming
   - Flexbox layouts
   - Animations and transitions
   - Responsive design
   - Modern effects (glassmorphism, gradients)

5. **Best Practices**
   - Component modularity
   - Semantic HTML
   - Accessibility (ARIA labels)
   - SEO optimization
   - Code organization

## 🎓 Next Steps

To further enhance this project, consider:

1. **Add Categories/Tags** - Organize tasks by category
2. **Due Dates** - Add deadline functionality
3. **Priority Levels** - Mark tasks as high/medium/low priority
4. **Search Functionality** - Search through tasks
5. **Dark/Light Theme Toggle** - Add theme switching
6. **Export/Import** - Save tasks to JSON file
7. **Drag & Drop** - Reorder tasks
8. **Backend Integration** - Connect to a database
9. **User Authentication** - Multi-user support
10. **Task Sharing** - Collaborate with others

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a learning project to demonstrate React.js fundamentals and modern web development practices.

---

**Happy Task Managing! 🚀**
