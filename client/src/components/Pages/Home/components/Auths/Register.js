import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Error from 'components/commons/Error';
import Loading from 'components/commons/Loading';
import { Container, Form } from 'components/Pages/Home/components/Auths/styles';
import withSession from 'HoCs/withSession';
import { REGISTER_USER } from 'queries/userQueries';
import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';


const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: ''
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
    const isInvalid = this.validateForm();
    if (!isInvalid) {
      register()
        .then(async ({ data }) => {
          localStorage.setItem('token', data.register.token);
          await this.props.refetch();
          this.clearState();
          this.props.history.push('/');
        })
        .catch(error => {
        });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    const { name, email, password, passwordConfirmation } = this.state;

    const isInvalid = !name || !email || !password
      || password !== passwordConfirmation;

    return isInvalid;
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;
    const registerInfo = {
      name,
      email,
      password
    };
    return (
      <Mutation mutation={REGISTER_USER} variables={registerInfo}>
        {(register, { data, loading, error }) => {
          if (loading) return <Loading/>;
          return (
            <Container>
              <Typography color='primary' variant='h3'>Join Medium</Typography>
              <Form onSubmit={event => this.handleSubmit(event, register)}>
                <FormControl margin='normal' required fullWidth>
                  <InputLabel htmlFor='name'>
                    Name
                  </InputLabel>
                  <Input value={name} id='name' name='name' autoFocus onChange={this.handleChange}/>
                </FormControl>
                <FormControl margin='normal' required fullWidth>
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
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Retype Password</InputLabel>
                  <Input value={passwordConfirmation} name="passwordConfirmation" type="password"
                         onChange={this.handleChange}/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Get started
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

export default withRouter(withSession(Register));
