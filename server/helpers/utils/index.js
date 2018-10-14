/* eslint-disable dot-notation */
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { inputNames } from '../constants';

const clone = (objects = []) => {
  let mainObject = {};
  objects.map(obj => {
    mainObject = Object.assign(mainObject, obj);
    return mainObject;
  });
  return mainObject;
};


const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({
    username,
    email
  }, secret, { expiresIn });
};

const isEmpty = value =>
  (value === undefined || value === null || typeof value === 'object'
    && Object.keys(value).length === 0 || typeof value === 'string'
    && value.trim().length === 0);

const validateInput = (input, inputName, minLength = 5, maxLength = 30) => {
  const errors = {};
  if (!validator.isLength(input, {
    min: minLength,
    max: maxLength
  })) {
    errors[`${inputName}`] = `${inputName} must be at least ${minLength} and not greater than ${maxLength} characters`;
  }
  return errors;
};

const validateEmail = (email, minLength = 5, maxLength = 30) => {
  let errors = {};
  if (!validator.isEmail(email)) {
    errors.email = 'Email is invalid.';
  }
  else {
    errors = clone(
      [
        errors,
        validateInput(email, inputNames.email, minLength, maxLength)
      ]);
  }
  return errors;
};


export { createToken, isEmpty, validateEmail, validateInput, clone };


