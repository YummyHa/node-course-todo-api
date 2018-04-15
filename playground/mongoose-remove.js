const { ObjectID } = require('mongodb');
 
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5ad36f360c841501c05a6934').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({ _id: "5ad36f360c841501c05a6934" }).then((todo) => {
  console.log(todo);
});
