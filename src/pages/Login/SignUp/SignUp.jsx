import React, { useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent,
  Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import logo from 'assets/logo-reduzida.svg';
import { signUpSchema } from 'validators';
import './SignUp.css';

function SignUp({ open, setOpen }) {
  const { control, getValues, reset, trigger } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  useEffect(() => {
    if (!open) {
      const defaultValues = {};
      reset(defaultValues);
      trigger();
    }
  }, [open, reset, trigger]);

  return (
    <div className="signUp-container">
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        >
          <DialogContent>
            <img id="signup-dialog-header-img" src={logo} alt="o Mural" />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell> 
                    <Controller
                      name="name"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          placeholder="Digite seu nome"
                          label='Nome Completo'
                          value={getValues('name')}
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell> 
                    <Controller
                      name="username"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          value={getValues('username')}
                          placeholder="Digite seu username"
                          label='@'
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> 
                    <Controller
                      name="birthdate"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          placeholder="Data de Nascimento"
                          label='Data de Nascimento'
                          value={getValues('birthdate')}
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell> 
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          value={getValues('email')}
                          placeholder="Digite seu email"
                          label='Email'
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell> 
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          value={getValues('password')}
                          placeholder="Digite sua senha"
                          type="password"
                          label='Senha'
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell> 
                    <Controller
                      name="passwordConfirm"
                      control={control}
                      render={({ field: { onChange }}) => (
                        <TextField
                          value={getValues('passwordConfirm')}
                          placeholder="Confirme sua Senha"
                          label='Confirme sua Senha'
                          type="password"
                          onChange={(e) => {
                            const { value } = e.target;
                            onChange(value);
                          }}
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </DialogContent>
          <DialogActions>
            <Button
              color="inherit"
              variant="text"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button disableElevation
              color="inherit"
              variant="contained"
              onClick={() => toast('Cadastro pipipipopopó')}
            >
              Cadastrar
            </Button>
          </DialogActions>
        </Dialog>
      
      </div>
  );
}

export { SignUp };
