import React from 'react';
import { Grid } from '@mui/material';
import logo from 'assets/logo-completa.svg';
import './Login.css';
import { LoginForm } from './LoginForm';

function Login() {

  return (
    <div className='login-container'>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img className="logo-completa" src={logo} alt="o Mural" />
        </Grid>
        <Grid item xs={12} md={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
}

export { Login };
