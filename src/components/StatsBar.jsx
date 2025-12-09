function StatsBar({ todos }) {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const activeTasks = totalTasks - completedTasks;
    const completionRate = totalTasks > 0
        ? Math.round((completedTasks / totalTasks) * 100)
        : 0;

    return (
        <div className="stats-bar">
            <div className="stat-item">
                <div className="stat-value">{totalTasks}</div>
                <div className="stat-label">Total Tasks</div>
            </div>
            <div className="stat-item">
                <div className="stat-value">{activeTasks}</div>
                <div className="stat-label">Active</div>
            </div>
            <div className="stat-item">
                <div className="stat-value">{completedTasks}</div>
                <div className="stat-label">Completed</div>
            </div>
            <div className="stat-item">
                <div className="stat-value">{completionRate}%</div>
                <div className="stat-label">Progress</div>
            </div>
        </div>
    );
}

export default StatsBar;
