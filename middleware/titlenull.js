module.exports = function (req,res,next) {
    if (!req.body.title || !req.body.author) {
       return res.status(400).send({message:"title or author must not null"});
    }
    next();
};
