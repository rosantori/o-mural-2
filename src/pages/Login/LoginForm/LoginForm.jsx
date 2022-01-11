import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from 'validators/loginFormSchema';
import './LoginForm.css';

function LoginForm({ onSignIn, onSignUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { control, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (response) => {
      console.log('ROSANA onSubmit', response);
  };

  const onError = (response) => {
    console.log('ROSANA onError', response);
  };

  const handleSignUp = () => {
    console.log('ROSANA oie sign up');
    onSignUp();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="loginForm-container">
          <div className="field">
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange }}) => (
                <TextField 
                  defaultValue=""
                  value={username}
                  label="Usuário"
                  placeholder="Digite o usuário"
                  onChange={(e) => {
                    const { value } = e.target;
                    onChange(value);
                    setUsername(value);
                  }}
                  error={errors?.username}
                  helperText={errors?.username?.message}
                />
              )}
            />
          </div>
          <div className="field">
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange }}) => (
                <TextField 
                  defaultValue=""
                  placeholder="Digite sua senha"
                  label="Senha"
                  value={password}
                  type="password"
                  onChange={(e) => {
                    const { value } = e.target;
                    onChange(value);
                    setPassword(value);
                  }}
                  error={errors?.password}
                  helperText={errors?.password?.message}
                />
              )}
            />
          </div>
          <div className="field buttons">
            <div>
              <Button disableElevation type="submit" color="inherit" variant="contained">
                Sign in
              </Button>
            </div>
            <div>
              <Button
                disableElevation
                onClick={handleSignUp}
                color="inherit"
                variant="outlined"
              >
                Sign up
              </Button>
            </div>
          </div>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export { LoginForm };