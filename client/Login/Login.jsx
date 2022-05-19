import React from 'react';

const Login = () => {
  return (
    <div className="container">
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
            <div className="login__remember-me">
              <input
                id="login__remember-me--input"
                className="login__field"
                type="checkbox"
              />
              <span className="login__remember-me--text">
                {' '}
                Zapamatovat si mě
              </span>
            </div>

            <a href="dashboard.html">
              <button type="button" id="login__button">
                Přihlásit se
              </button>
            </a>
          </form>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default Login;
