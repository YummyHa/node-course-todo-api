// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // deleteMany
    // client.db('TodoApp').collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // client.db('TodoApp').collection('Todos').deleteOne({text: 'Eat Dinner'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelte
    client.db('TodoApp').collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });

    client.close();
});
