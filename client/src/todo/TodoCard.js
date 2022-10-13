import React from 'react'
import './TodoCards.css'



const MatchesCard = ({ todo, deleteTodo }) => {

  const handleDelete = () => {
    fetch("/todos" + todo.id, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(data => {
        deleteTodo(data)
      })
  }


  return (
        <div className="todo-card">
          <li>
            <h3 className='date'>{todo.date}</h3>
            <p className='title'>{todo.title} </p>
            <button onClick={handleDelete} >Delete</button>
          </li>
        </div>
  )
}

export default MatchesCard