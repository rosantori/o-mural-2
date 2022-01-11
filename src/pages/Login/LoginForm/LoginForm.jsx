import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Grid, TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from 'validators/loginFormSchema';

function LoginForm() {
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

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
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
        </Grid>
        <Grid item>
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
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button variant="contained">
              Sign in
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Grid>
      
    </form>
  );
}

export { LoginForm };