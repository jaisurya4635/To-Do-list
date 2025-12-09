import { useState } from 'react';

function TodoInput({ onAddTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim()) {
            onAddTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form className="todo-input-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    type="text"
                    className="todo-input"
                    placeholder="What needs to be done? 🎯"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    id="todo-input-field"
                />
            </div>
            <button type="submit" className="btn btn-primary" id="add-todo-btn">
                <span>Add Task</span>
                <span>+</span>
            </button>
        </form>
    );
}

export default TodoInput;
