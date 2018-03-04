module.exports = function (request, response, next) {
    if (!request.body.title || !request.body.author) {
       return response.status(400).json({message:"title or author must not null"});
    }
    next();
};
