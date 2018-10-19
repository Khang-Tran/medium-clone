import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography/Typography';
import Error from 'components/commons/Error';
import Loading from 'components/commons/Loading';
import { Container, Form } from 'components/Pages/Home/components/Auths/styles';
import withSession from 'HoCs/withSession';
import { LOGIN_USER } from 'queries/userQueries';
import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

const initialState = {
  email: '',
  password: ''
};

class Login extends React.Component {

  state = { ...initialState };
  handleSubmit = (event, login) => {
    event.preventDefault();
    login()
      .then(async ({ data }) => {
        localStorage.setItem('token', data.login.token);
        const { history, refetch } = this.props;
        refetch();
        this.clearState();
        history.push('/');
      })
      .catch(() => {
      });
  };

  clearState = () => {
    this.setState({ ...initialState });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const loginInfo = {
      email,
      password
    };
    return (
      <Mutation mutation={LOGIN_USER} variables={loginInfo}>
        {(login, { data, loading, error }) => {
          if (loading) return <Loading/>;
          return (
            <Container>
              <Typography color='primary' variant='h3'>Login</Typography>
              <Form onSubmit={event => this.handleSubmit(event, login)}>
                <FormControl margin='normal' autoFocus required fullWidth>
                  <InputLabel htmlFor='email'>
                    Email
                  </InputLabel>
                  <Input value={email} id='email' name='email'
                         onChange={this.handleChange}/>
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input value={password} name="password" type="password"
                         onChange={this.handleChange}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Sign in
                </Button>
                {error && <Error error={error}/>}
              </Form>
            </Container>
          );
        }}
      </Mutation>
    );
  }

}

export default withRouter(withSession(Login));
