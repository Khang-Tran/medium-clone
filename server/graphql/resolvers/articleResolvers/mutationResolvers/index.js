import merge from 'lodash.merge';
import addArticle from './addArticle';
import clapArticle from './clapArticle';

const mutationResolvers = merge(clapArticle, addArticle);

export default mutationResolvers;
