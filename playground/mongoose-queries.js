const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id='59aaf6134c479e0fc4f1d2a811';
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos)
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo)
// });

// Todo.findById(id).then((todo)=>{
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('59ab1f451e1dd2477d67dcd7').then((user)=>{
  if (!user) {
    return console.log('ID not found');
  }
  console.log(JSON.stringify(user,undefined,2));
}).catch((e) => console.log(e));
