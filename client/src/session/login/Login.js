import React, { useState } from 'react';
import '../login/Login.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker-App/client/src/context/user.js'


  const Login = ({ handleCurrentUser }) => {


    const navigate = useNavigate();

    const [state, setState] = useState({
      username: '',
      password: ''
    })
  
    const handleChange = e => {
      setState({
        ...state,
        [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = e => {
      e.preventDefault();
      
      console.log(handleCurrentUser)
  
      login(state, handleCurrentUser)
      navigate('/create-to-do')
    }

  return (
        <div>
          <h2>Login</h2>
            <form onSubmit={ handleSubmit } className='form-container'>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' id='username' value={ state.username } onChange={ handleChange } />
                </div>
                <div>
                    <label htmlFor='password'>Password: </label>
                    <input type='text' name='password' id='password' value={ state.password } onChange={ handleChange } />
                </div>
              <input className='center-submit' type="submit" value='Login' />
              <div>
                    <h3>Don't have an account?</h3>
                    <NavLink to="/signup"><button className='signup'> Sign Up </button></NavLink>
                </div>
            </form>
        </div>
  )
}

export default Login