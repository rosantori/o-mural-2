import * as yup from 'yup';

const loginFormSchema = yup.object({
  username: yup.string().required('Campo necessário'),
  password: yup.string()
    .min(6, "Campo necessário")
    .required('Campo necessário'),
}).required();

export { loginFormSchema };
