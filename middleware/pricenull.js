module.exports = function (req,res,next) {
    if (!req.body.price) {
        req.body.price = 0;
    }
    next();
};
