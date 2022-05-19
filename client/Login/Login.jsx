import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div class="container">
      <header></header>
      <main id="login">
        <div id="login__core">
          <h1 id="login__title">Vítej zpátky!</h1>
          <form id="login__form">
            <input
              id="login__user-name"
              className="login__field"
              type="text"
              placeholder="Přihlašovací jméno"
            />
            <input
              id="login__user-password"
              className="login__field"
              type="password"
              placeholder="Heslo"
            />
            <div class="login__remember-me">
              <input
                id="login__remember-me--input"
                className="login__field"
                type="checkbox"
              />
              <span class="login__remember-me--text"> Zapamatovat si mě</span>
            </div>

            <Link to="/dashboard">
              <button type="button" id="login__button">
                Přihlásit se
              </button>
            </Link>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
