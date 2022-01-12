import * as yup from 'yup';

const signUpSchema = yup.object({
  name: yup.string().required(),
  username: yup.string().required(),
  birthdate: yup.date().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  passwordConfirm: yup.string().srequired(),
}).required();

export { signUpSchema};
