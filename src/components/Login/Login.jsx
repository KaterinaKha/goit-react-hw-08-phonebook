import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from 'redux/operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(loginUserThunk({ email, password }));
    form.reset();
  };

  return (
    <div>
      <h1>Login Into Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input name="userEmail" type="email" required />
        </label>

        <label>
          <p>Password</p>
          <input name="userPassword" type="password" required minLength={8} />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
};
