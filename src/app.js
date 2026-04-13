import express from "express"
// import { tasks } from "./taskStore";


const app = express()
// const PORT = 3000;

app.use(express.json());

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

export { app }