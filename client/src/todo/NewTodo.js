import React, { useState } from 'react';
import '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker-App/client/src/todo/Todo.css'

const NewTodo = ({ user }) => {

const [todoForm, setTodoForm] = useState({ date: '', title: '' })

    // const [date, setDate] = useState("");
    // const [title, setTitle] = useState("");


  const handleChange = e => {
    e.preventDefault()
    const form = {...todoForm, [e.target.name]: e.target.value}
    setTodoForm(form)
  }

  const loaded = () => {
    return (
      <>
<h2>{user.username} new to-do </h2>
<form className="form-container" onSubmit={ handleSubmit }>
        <div>
            <label htmlFor='date'>Weekday: 
              <input type='text' required name='date' id='date' value={todoForm.date} onChange={ handleChange } />
            </label>
        </div>
        <div>
            <label htmlFor='title'>Todo:
              <input type='text' required name='title' id='title' value={todoForm.title} onChange={ handleChange } />
            </label>
        </div>
        <div>
        <input className='center-submit' type="submit" value='Enter' />
        </div>
    </form>
</>
    )
  }
  const handleSubmit = e => {
      e.preventDefault();
      fetch("/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: todoForm.date,
          title: todoForm.title,
          user_id: user.id
        }),
      })
      }
console.log(user)
return ( 
  <>

    {user ? loaded() : null}
  </>
)}


export default NewTodo;