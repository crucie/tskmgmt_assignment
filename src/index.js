import { app } from "./app.js";
import { tasks } from "./taskStore.js";
import taskRoutes from "./routes/task.routes.js"

const PORT = 3000

// app.get('/task', (req, res) => {
//     res.json(tasks)
// })


app.use('/', taskRoutes)

//the given route works for a scalable route, in a prod app!!!
// app.use('/api/v1/tasks', taskRoutes); 


app.listen(PORT, () => {
    console.log(`Server is running on : ${PORT}`)
})