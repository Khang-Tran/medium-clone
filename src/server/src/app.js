import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import expressGraphQL from 'express-graphql';

import dbKey from './config/key';
import userSchema from './graphql/index';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(dbKey.mongoURI, {useNewUrlParser: true})
		.then(() => console.log('Database connected'));

app.use('/graphql', expressGraphQL({
		graphiql: true,
		schema: userSchema
}));
export default app;
