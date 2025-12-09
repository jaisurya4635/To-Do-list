import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (editText.trim() && editText !== todo.text) {
            onEdit(todo.id, editText.trim());
        }
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        } else if (e.key === 'Escape') {
            setEditText(todo.text);
            setIsEditing(false);
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Just now';
        if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
        if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
        });
    };

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <div
                className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
                onClick={() => onToggle(todo.id)}
                role="checkbox"
                aria-checked={todo.completed}
                tabIndex={0}
                id={`todo-checkbox-${todo.id}`}
            >
                {todo.completed && <span className="checkmark">✓</span>}
            </div>

            <div className="todo-content">
                {isEditing ? (
                    <input
                        type="text"
                        className="todo-edit-input"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleEdit}
                        onKeyDown={handleKeyDown}
                        autoFocus
                        id={`todo-edit-input-${todo.id}`}
                    />
                ) : (
                    <>
                        <div className="todo-text">{todo.text}</div>
                        <div className="todo-timestamp">{formatDate(todo.createdAt)}</div>
                    </>
                )}
            </div>

            <div className="todo-actions">
                {!isEditing && (
                    <button
                        className="btn btn-icon btn-success"
                        onClick={() => setIsEditing(true)}
                        title="Edit task"
                        id={`edit-todo-btn-${todo.id}`}
                    >
                        ✏️
                    </button>
                )}
                <button
                    className="btn btn-icon btn-danger"
                    onClick={() => onDelete(todo.id)}
                    title="Delete task"
                    id={`delete-todo-btn-${todo.id}`}
                >
                    🗑️
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
