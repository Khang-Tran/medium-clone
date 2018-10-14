import { inputNames } from '../helpers/constants';
import { clone, isEmpty, validateEmail, validateInput } from '../helpers/utils';

const validateRegisterInput = data => {
  const { email, name, password } = data;
  let errors = {};
  errors = clone(
    [
      errors,
      validateEmail(email),
      validateInput(name, inputNames.name),
      validateInput(password, inputNames.password)
    ]
  );

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateRegisterInput;
