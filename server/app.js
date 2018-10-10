import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import {ApolloServer} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import mongoose from 'mongoose';

import {resolvers, typeDefs} from './graphql';
import routes from './routes';



const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(() => console.log('Mongo database connected..'))
  .catch(err => console.log(`Errors occur when tried to connect the database: ${err}`));

app.use('/', routes);


const server = new ApolloServer({
  schema,
  context: {

  }
});

server.applyMiddleware({app});





export default app;
