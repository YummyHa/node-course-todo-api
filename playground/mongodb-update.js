// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    client.db('TodoApp').collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5ad32d22d6d91c7d72081e9e')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then(result => {
        console.log(result);
    })

    client.close();
});
