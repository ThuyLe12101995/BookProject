module.exports = function (request, response, next) {
    if (request.body.title.length > 40 || request.body.author.length > 100) {
        return response.status(400).json({message : 'title length must < 40 and  author must < 100'});
    }
    next();
};