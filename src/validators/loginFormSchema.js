import * as yup from 'yup';

const loginFormSchema = yup.object({
  username: yup.string().required('Campo necessário'),
}).required();

export { loginFormSchema };
