function FilterTabs({ filter, setFilter, todos }) {
    const allCount = todos.length;
    const activeCount = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    return (
        <div className="filter-tabs">
            <button
                className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                id="filter-all-btn"
            >
                All <span className="count">{allCount}</span>
            </button>
            <button
                className={`filter-tab ${filter === 'active' ? 'active' : ''}`}
                onClick={() => setFilter('active')}
                id="filter-active-btn"
            >
                Active <span className="count">{activeCount}</span>
            </button>
            <button
                className={`filter-tab ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
                id="filter-completed-btn"
            >
                Completed <span className="count">{completedCount}</span>
            </button>
        </div>
    );
}

export default FilterTabs;
