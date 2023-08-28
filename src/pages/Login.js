import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  const login = async () => {
    try {
      const response = await fetch(`http://localhost:8080/user/login?email=${email}&password=${password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accept':'*/*',
          'Connection':'keep-alive'
        },
      });
      const output = await response.text(); // Use await to get the response body

      if (output === '1' ) {
        // Email and password are in the database, redirect to home page
        navigate('/home');
      } else {
        // Email and password are not in the database, redirect to registration page
        navigate('/registration');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
        Don't have an account? Register here.
      </button>
    </div>
  );
};
