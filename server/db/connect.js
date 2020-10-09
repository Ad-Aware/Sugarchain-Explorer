require('dotenv').config();
const { collections } = require('../config');
const { MongoClient } = require('mongodb');

const dbConnect = async (database = process.env.DB_NAME) => {
    const client = await MongoClient.connect(
        "mongodb://sugarexplorer:sugarexplorer231$@127.0.0.1:27017/blockchain?authSource=blockchain&?retryWrites=false&?readPreference=primaryPreferred",
        { useNewUrlParser: true, replicaSet: 'rs0', poolSize: 10, useUnifiedTopology: true },
    );

    const db = client.db();

    return {
        client,
        db,
        collections: {
            blocks: db.collection(collections.blocks),
            txs: db.collection(collections.txs),
            ios: db.collection(collections.ios),
            addresses: db.collection(collections.addresses)
        }
    };
};

module.exports = dbConnect;
