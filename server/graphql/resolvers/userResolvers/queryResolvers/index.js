import merge from 'lodash.merge';
import getCurrentUser from './getCurrentUser';

const resolver = {};
const queryResolvers = merge(resolver, getCurrentUser);

export default queryResolvers;
