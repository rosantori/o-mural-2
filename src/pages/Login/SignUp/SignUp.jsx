import React from 'react';
import { Button, Dialog, DialogActions, DialogContent,
  DialogTitle, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { getValue } from '@testing-library/user-event/dist/utils';

function SignUp({ open, setOpen }) {
  const { control, getValues } = useForm();
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      >
        <DialogTitle>
          Cadastro de Usuário
        </DialogTitle>
        <DialogContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell> Nome </TableCell>
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
                          console.log('ROSANA nome', value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Email </TableCell>
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
                          console.log('ROSANA email', value);
                          onChange(value);
                        }}
                      />
                    )}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell> username </TableCell>
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
                          console.log('ROSANA username', value);
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
            variant="contained">
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export { SignUp };
