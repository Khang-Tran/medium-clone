import merge from 'lodash.merge';
import articleResolvers from './articleResolvers';
import userResolvers from './userResolvers';

export default merge(articleResolvers, userResolvers);
