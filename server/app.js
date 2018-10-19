import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cloundinary from 'cloudinary';
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import logger from 'morgan';

import schema from './graphql';
import ArticleModel from './models/Article';
import UserModel from './models/User';

const app = express();
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (token !== 'null' && token !== undefined) {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET);
      req.currentUser = currentUser;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

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
  context: ({ req }) => {
    const { currentUser } = req;
    return {
      UserModel,
      ArticleModel,
      currentUser
    };
  }
});

server.applyMiddleware({app});


export default app;
