import TodoItem from './TodoItem';

function TodoList({ todos, onToggleTodo, onDeleteTodo, onEditTodo, filter }) {
    if (todos.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">
                    {filter === 'completed' ? '🎉' : filter === 'active' ? '📝' : '🌟'}
                </div>
                <h3 className="empty-title">
                    {filter === 'completed'
                        ? 'No completed tasks yet'
                        : filter === 'active'
                            ? 'No active tasks'
                            : 'No tasks yet'}
                </h3>
                <p className="empty-description">
                    {filter === 'completed'
                        ? 'Complete some tasks to see them here!'
                        : filter === 'active'
                            ? 'All tasks are completed! Great job!'
                            : 'Add your first task to get started!'}
                </p>
            </div>
        );
    }

    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggleTodo}
                    onDelete={onDeleteTodo}
                    onEdit={onEditTodo}
                />
            ))}
        </ul>
    );
}

export default TodoList;
