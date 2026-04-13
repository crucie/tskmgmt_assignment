class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super("message")
        this.statusCode = statusCode
        this.message = message
        this.errors = errors
        this.data = null
        this.success = false;

        if(stack){
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}


// it's a custom class that extends the existing class ApiError, helps during the API designing and throwin
// error codes, and message efficiently. just do this: throw new ApiError(404, "Task not found"). 
// improves consistency.