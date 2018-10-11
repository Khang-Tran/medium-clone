import merge from 'lodash.merge';
import addArticle from './addArticle';

const resolver = {};
const mutationResolvers = merge(resolver, addArticle);

export default mutationResolvers;
