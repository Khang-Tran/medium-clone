import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { REGISTER_USER } from '../../../../../queries/userQueries';
import Spinner from '../../../../commons/Spinner';
import { Container, Form } from './styles';


const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  errors: []
};

class Register extends React.Component {
  state = {
    ...initialState
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleSubmit = (event, register) => {
    event.preventDefault();
    const isValid = this.isFormValid();
    if (isValid) {
      this.setState({ errors: [] });
      register()
        .then(async ({ data }) => {
          localStorage.setItem('token', data.register.token);
          const { history } = this.props;
          this.clearState();
          history.push('/');
        })
        .catch(err => {
          const { errors } = this.state;
          this.setState({
            errors: errors.concat(err.message)
          });
        });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  isFormValid = () => {
    const { errors } = this.state;
    const error = {};
    if (this.isFormEmpty(this.state)) {
      error.message = 'Fill all the fields.';
      this.setState({ errors: errors.concat(error) });
    } else if (!this.isPasswordValid(this.state)) {
      error.message = 'Password is invalid';
      this.setState({ errors: errors.concat(error) });
    }
    return Object.keys(error).length === 0;

  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    let isValid = true;
    if (password.length < 6 || passwordConfirmation.length < 6) {
      isValid = false;
    } else if (password !== passwordConfirmation) {
      isValid = false;
    }
    return isValid;
  };


  isFormEmpty = ({ name, email, password, passwordConfirmation }) => {
    return !name.length || !email.length || !password.length || !passwordConfirmation.length;
  };

  handleInputError = (errors, inputName) => {
    if (errors.length === 0) {
      return false;
    } else {
      return errors.some(err => err.toLowerCase()
        .includes(inputName));
    }
  };

  render() {
    const { name, email, password, passwordConfirmation, errors } = this.state;
    const registerInfo = {
      name,
      email,
      password
    };
    return (
      <Mutation mutation={REGISTER_USER} variables={registerInfo}>
        {(register, { loading }) => {
          if (loading) return <Spinner/>;
          return (
            <Container>
              <Typography color='primary' variant='h3'>Join Medium</Typography>
              <Form onSubmit={event => this.handleSubmit(event, register)}>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='name'>
                    Name
                  </InputLabel>
                  <Input value={name} id='name' name='name' autoFocus onChange={this.handleChange}
                         error={this.handleInputError(errors, 'name')}/>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='email'>
                    Email
                  </InputLabel>
                  <Input value={email} id='email' name='email'
                         onChange={this.handleChange}
                         error={this.handleInputError(errors, 'email')}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input value={password} name="password" type="password"
                         onChange={this.handleChange}
                         error={this.handleInputError(errors, 'password')}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Retype Password</InputLabel>
                  <Input value={passwordConfirmation} name="passwordConfirmation" type="password"
                         onChange={this.handleChange}
                         error={this.handleInputError(errors, 'password')}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Get started
                </Button>
              </Form>
            </Container>
          );
        }}
      </Mutation>
    );
  }

}

export default withRouter(Register);
