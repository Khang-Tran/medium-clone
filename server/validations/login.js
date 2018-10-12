import { inputNames } from '../helpers/constants';
import { clone, isEmpty, validateEmail, validateInput } from '../helpers/utils';

const validateLoginInput = data => {
  const { email, password } = data;
  let errors = {};
  errors = clone(
    [
      errors,
      validateEmail(email),
      validateInput(password, inputNames.password)
    ]
  );

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validateRegisterInput;
