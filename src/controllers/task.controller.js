import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { tasks, getNextId } from "../taskStore.js";

const getTasks = asyncHandler( async(req, res) => {
    const {status, sort } = req.query;

    let filteredTasks = [...tasks];

    if(status) {
        filteredTasks = filteredTasks.filter(task => task.status === status.toLowerCase());
    }

    if(sort === "createdAt") {
        filteredTasks.sort(( x, y) => new Date(x.createdAt) - new Date(y.createdAt));
    }

    return res.status(200).json(new ApiResponse(
        200,
        filteredTasks,
        "Tasks fetched Successfully"
    ));
});

const getTaskById = asyncHandler( async(req, res) => {
    const {id} = req.params;

    const task = tasks.find((t) => t.id === Number(id));
    
    if (!task) {
        throw new ApiError(404, ` Task with ID ${id} not found`);
    }

    return res.status(200).json(
        new ApiResponse(200, task, "Task retrieved successfully")
    );
})

const createTasks = asyncHandler( async(req, res) => {
    const {title, description} = req.body;

    if (!title || title.trim() === "" ) {
        throw new ApiError(400, "Title is Required to create a task.");
    }

    const newTask = {
        id: getNextId(),
        title: title.trim(),
        description: description || "",
        status: "pending", 
        createdAt: new Date()
    };

    tasks.push(newTask);

    return res.status(201).json(
        new ApiResponse(201, newTask, "Task Created successfully!!!")
    );
})

const updateTask = asyncHandler( async(req, res) => {
    const {id} = req.params;
    const { title, description } = req.body;

    const task = tasks.find((t) => t.id === Number(id));

    if(!task) {
        throw new ApiError(404, `Task with ID ${id} not found`);
    };
    
    if (req.body.status && !["pending", "done"].includes(req.body.status)) {
        throw new ApiError(400, "Invalid status. Must be 'pending' or 'done'");
    }
    if (title) task.title = title;
    if (description !== undefined) task.description = description;

    return res.status(200).json(
        new ApiResponse(200, task, "Task Updated Successfully")
    );

    // this only updates the task if provided, expecting if not provided, then its not needed to change

})

const markAsDone = asyncHandler( async( req, res) => {
    const {id} = req.params;
    const task = tasks.find((t) => t.id === Number(id));

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    task.status = "done";

    return res.status(200).json(
        new ApiResponse(200, task, "Task marked as completed")
    );
})

const deleteTask = asyncHandler( async(req, res) =>  {
    const {id} = req.params;
    const index = tasks.findIndex((t) => t.id === Number(id));      //looking for the index of the task

    if (index === -1) {
        throw new ApiError(404, "task not found");
    }

    tasks.splice(index, 1);

    return res.status(204).json(
        new ApiResponse(
            204, 
            {},
            "Deleted"
        )
    );
})

export { getTasks, createTasks, getTaskById, updateTask, markAsDone, deleteTask}