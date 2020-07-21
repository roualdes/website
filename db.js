var MongoClient = require('mongodb').MongoClient;

const user = process.env.MONGO_USERNAME;
const psswd = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const dbname =  process.env.MONGO_INITDB_DATABASE;
const url = 'mongodb://' + user + ':' + psswd + '@' + host + ':' + port + '/' + dbname;

const dbStartup = {
    db: undefined,
    connect: callback => {
        // Initialize connection once
        if (process.env.DEVELOPMENT !== "true") {
            const client = new MongoClient(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            if (!client.isConnected()) client.connect();
            dbStartup.db = client.db(dbname);
        } else {
            dbStartup.db = "mongodb";
        }
    }
}

exports.dbStartup = dbStartup;
