import { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import FilterTabs from './components/FilterTabs';
import StatsBar from './components/StatsBar';
import './index.css';

function App() {
    // State management
    const [todos, setTodos] = useState(() => {
        // Load todos from localStorage on initial render
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [filter, setFilter] = useState('all');

    // Save todos to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Add new todo
    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([newTodo, ...todos]);
    };

    // Toggle todo completion status
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Edit todo
    const editTodo = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    // Filter todos based on selected filter
    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    };

    const filteredTodos = getFilteredTodos();

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">To Do List</h1>
                <p className="app-subtitle">Organize your life, one task at a time ✨</p>
            </header>

            <div className="todo-container">
                <div className="card">
                    <TodoInput onAddTodo={addTodo} />

                    <FilterTabs
                        filter={filter}
                        setFilter={setFilter}
                        todos={todos}
                    />

                    <TodoList
                        todos={filteredTodos}
                        onToggleTodo={toggleTodo}
                        onDeleteTodo={deleteTodo}
                        onEditTodo={editTodo}
                        filter={filter}
                    />
                </div>

                <StatsBar todos={todos} />
            </div>
        </div>
    );
}

export default App;
