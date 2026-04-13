import { Router } from "express";
import { createTasks, getTasks, getTaskById, markAsDone, updateTask, deleteTask } from "../controllers/task.controller.js";
import { ApiError } from "../utils/ApiError.js";

const router = Router();

//default route
router.route("/tasks").get(getTasks).post(createTasks).all((req, res) => { throw new ApiError(405, `Method ${req.method} not allowed on /tasks`);});

//routes that need id for their execution >.<
router.route("/tasks/:id").get(getTaskById).put(updateTask).delete(deleteTask).all((req, res) => { throw new ApiError(405, `Method ${req.method} not allowed on /tasks`);});;

//route to patch!!!
router.route("/tasks/:id/done").patch(markAsDone);



export default router;