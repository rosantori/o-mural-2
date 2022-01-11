import React, { useState } from 'react';
import { Grid } from '@mui/material';
import logo from 'assets/logo-completa.svg';
import './Login.css';
import { LoginForm } from './LoginForm';
import { SignUp } from './SignUp';

function Login() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleSignIn = () => {
    console.log('ROSANA SIGN IN');
  };

  const handleSignUp = () => {
    setShowSignUpModal(true);
  };

  return (
    <div className='login-container'>
      <SignUp open={showSignUpModal} setOpen={setShowSignUpModal} />
      <Grid container>
        <Grid item xs={12} md={6}>
          <img className="logo-completa" src={logo} alt="o Mural" />
        </Grid>
        <Grid item xs={12} md={6}>
          <LoginForm onSignIn={handleSignIn} onSignUp={handleSignUp}/>
        </Grid>
      </Grid>
    </div>
  );
}

export { Login };
