module.exports = function(req, res, next) {

  return passport.authenticate('bearer', { session: false })(req, res, next);
  
};
