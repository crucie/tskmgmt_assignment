// const task = {
//     id: Number,
//     title: String,
//     description: String,
//     status: "pending" | "completed",
//     createdAt: new Date()
// }

//this above is the possible model for the data storage!

const tasks = [];
let nextId = 1;

const getNextId = () => nextId++;

export {tasks, getNextId}