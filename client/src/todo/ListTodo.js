import { useEffect, useState } from "react";
import TodoCard from './TodoCard'

function ListTodo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/todos")
      .then((r) => r.json())
      .then(setTodos);
  }, []);
console.log(todos);

const deleteTodo = todo => {
  setTodos(todos.filter(workouts => workouts.id !== todo.id))
}
  
  return ( 
    
    <div>
        {todos.map((todo) => (
                <TodoCard key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                ))}
    </div>
  
  )
}

export default ListTodo;
