import mutationResolvers from './mutationResolvers';
import queryResolvers from './queryResolvers';

const userResolvers = {
  Query: {
    ...queryResolvers
  },
  Mutation: {
    ...mutationResolvers
  }
};

export default userResolvers;
