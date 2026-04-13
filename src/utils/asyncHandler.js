const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler}

// The above asyncHandler is used to avoid a try-catch block at every async routes using PROMISE(can also be
// written using an HOF too). HEHE >.<