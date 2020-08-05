module.exports = (err, req, res, next) => {
    res.status(500);
    console.log('Oops! It looks like something went wrong: ', err.message);
    res.render('error');
  };