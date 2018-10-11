import merge from 'lodash.merge';
import getAllArticles from './getAllArticles';

const resolver = {};
const queryResolvers = merge(resolver, getAllArticles);

export default queryResolvers;
