import React, { useState } from 'react';
import './Login.css';
import DarkMode from '../DarkMode/DarkMode.jsx';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login__container">
      <div className="login__topbar">
        <DarkMode />
        <main id="login">
          <div id="login__core">
            <h1 id="login__title">Vítej zpátky!</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault;
                fetch('/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ login, password }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    window.localStorage.setItem('token', data.results.token);
                    window.location = '/dashboard';
                  });
              }}
              id="login__form"
            >
              <input
                value={login}
                onChange={(e) => {
                  setLogin(e.target.value);
                }}
                id="login__user-name"
                className="login__field"
                type="text"
                placeholder="Přihlašovací jméno"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="login__user-password"
                className="login__field"
                type="password"
                placeholder="Heslo"
              />
              <div className="login__remember-me">
                <input
                  id="login__remember-me--input"
                  className="login__field--checkbox"
                  type="checkbox"
                />
                <span className="login__remember-me--text">
                  Zapamatovat si mě
                </span>
              </div>
              <button
                type="submit"
                className={`login__button ${
                  login.length === 0 || password === 0
                    ? 'login__button--disabled'
                    : null
                }`}
                disabled={login.length === 0 || password === 0}
              >
                Přihlásit se
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Login;
