import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFormSchema } from 'validators/loginFormSchema';

function LoginForm() {
  const [username, setUsername] = useState("");

  const { control, handleSubmit } = useForm({
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
      <Controller
        name="username"
        control={control}
        render={({ field: { onChange }}) => (
          <TextField 
            defaultValue=""
            value={username}
            onChange={(e) => {
              const { value } = e.target;
              onChange(value);
              setUsername(value);
            }}
          />
        )}
      />
      
    </form>
  );
}

export { LoginForm };