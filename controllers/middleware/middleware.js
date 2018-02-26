exports.checkTitle = function (req,res,next) {
    if (!req.body.title) {
        res.status(400).send({message:"title must not null"});
    }
    next();
};

exports.checkLengthTitle = function (req,res,next) {
    if (req.body.title.length>40) {
        res.status(400).send({message:"length of title must less 40 "});
    }
    next();
};

exports.checkLengthAuthor = function (req,res,next) {
    if (req.body.author.length>100) {
        res.status(400).send({message: "length of author must less 100"});
    }
    next();
};