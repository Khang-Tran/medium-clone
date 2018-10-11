import merge from 'lodash.merge';
import login from './login';
import register from './register';

const mutationResolvers = merge(register, login);

export default mutationResolvers;
