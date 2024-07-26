export const Footer: Reac.FC<Props> = ({activeCount,todos, onClearCompleted}) => {
    return (
        <footer className="footer" >
            <span className="todo-count" >
                <strong>{todos.length}</strong> tareas pendientes
            </span>

            <Filters
            filterSelected={}
            onFilterchange={}
             />

        </footer>
    )
}