class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }

}

export { ApiResponse };

//This API Response is going to create a standard, and structure.....this would help the frontend dev 
//to debug easily/efficiently(whatever he prefers).