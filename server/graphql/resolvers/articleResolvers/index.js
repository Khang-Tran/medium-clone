import mutationResolvers from './mutationResolvers';
import queryResolvers from './queryResolvers';

const articleResolvers = {
  Query: {
    ...queryResolvers
  },
  Mutation: {
    ...mutationResolvers
  }
};

export default articleResolvers;
