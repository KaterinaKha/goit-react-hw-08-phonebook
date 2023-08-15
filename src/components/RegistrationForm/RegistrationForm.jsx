import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from 'redux/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(registerUserThunk({ name, email, password }));
    form.reset();
  };

  return (
    <div>
      <h1>Register Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input name="userName" type="text" required />
        </label>

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
