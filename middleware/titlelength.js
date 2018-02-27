module.exports =function (req,res,next) {
  if (req.body.title.length > 40 || req.body.author.length > 100) {
      return res.status(400).send({message : 'title length must less 40 and  author must less 100'});
  }
  next();
};