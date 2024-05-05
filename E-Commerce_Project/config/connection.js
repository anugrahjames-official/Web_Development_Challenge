const { MongoClient } = require('mongodb');
const state = {
    db: null
}

module.exports.connect = (done) => {
    const url = 'mongodb://localhost:27017';
    const dbname = 'E-Commerce';

    MongoClient.connect(url, (err, client) => {
        if (err) return done(err);
        state.db = client.db(dbname);
        done();
    });
}

module.exports.get = () => {
    return state.db;
}