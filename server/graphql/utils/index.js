import jwt from 'jsonwebtoken';

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({
    username,
    email
  }, secret, { expiresIn });
};

export { createToken };


