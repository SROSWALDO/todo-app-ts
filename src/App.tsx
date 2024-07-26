import { useState } from "react"
import Todos from "./components/Todos";
import { TodoId, type Todo as TodoType  } from "./components/types"

function App(): JSX.Element {

  const mockTodos = [
    {
      id: '1',
      title: 'Ver el twitch de Jhonny sins',
      completed: true,
    },
    {
      id: '2',
      title: 'Aprender React con TypeScript',
      completed: false,
    },
    {
      id: '3',
      title: 'Clavarme una paja bien insana',
      completed: false,
    },
  ]

  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id); //filtrar todos aquellos que no tengan este id
    setTodos(newTodos)
  }

  const handleCompleted = (
    {id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return{
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  
  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo={handleCompleted} />
    </div>
    
  )
}

export default App
