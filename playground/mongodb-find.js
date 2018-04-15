// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // client.db('TodoApp').collection('Todos').find().count().then((count) => {
    //     console.log('Todos count', count);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    client.db('TodoApp').collection('Users').find({name: 'Jan'}).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    client.close();
});
