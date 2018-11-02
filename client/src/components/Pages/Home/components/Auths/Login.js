import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { LOGIN_USER } from '../../../../../queries/userQueries';
import Spinner from '../../../../commons/Spinner';
import { Form, Container } from './styles';

const initialState = {
  email: '',
  password: '',
  errors: []
};

class Login extends React.Component {

  state = { ...initialState };

  handleSubmit = (event, login) => {
    event.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [] });
      login()
        .then(async ({ data }) => {
          localStorage.setItem('token', data.login.token);
          const { history } = this.props;
          this.clearState();
          history.push('/');
        })
        .catch((err) => {
          const { errors } = this.state;
          this.setState({
            errors: errors.concat(err.message)
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    const { email, password, errors } = this.state;
    const loginInfo = {
      input: {
        email,
        password
      }
    };
    return (
      <Mutation mutation={LOGIN_USER} variables={loginInfo}>
        {(login, { loading }) => {
          if (loading) return <Spinner/>;
          return (
            <Container>
              <Typography color='primary' variant='h3'>Login</Typography>
              <Form onSubmit={event => this.handleSubmit(event, login)}>
                <FormControl margin='normal' autoFocus required fullWidth>
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
                <Button type="submit" variant="contained" color="primary">
                  Sign in
                </Button>
              </Form>
            </Container>
          );
        }}
      </Mutation>
    );
  }
}


export default withRouter(Login);
