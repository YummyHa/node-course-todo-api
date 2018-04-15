// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // client.db('TodoApp').collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    // client.db('TodoApp').collection('Users').insertOne({
    //     name: 'Khanh Ha',
    //     age: 22,
    //     location: 'HCM'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    client.close();
});
