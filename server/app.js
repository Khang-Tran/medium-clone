import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import logger from 'morgan';
import cloundinary from 'cloudinary';

import schema from './graphql';
import ArticleModel from './models/Article';
import UserModel from './models/User';

const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(() => console.log('Mongo database connected..'))
  .catch(err => console.log(`Errors occur when tried to connect the database: ${err}`));

cloundinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const server = new ApolloServer({
  schema,
  context: {
    UserModel,
    ArticleModel
  }
});

server.applyMiddleware({app});


export default app;
