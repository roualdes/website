import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const user = process.env.MONGO_USERNAME;
const psswd = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const db =  process.env.MONGO_INITDB_DATABASE;

const url = 'mongodb://' + user + ':' + psswd + '@' + host + ':' + port + '/' + db;

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('math');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
