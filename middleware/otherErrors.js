// const errorHandler = (error, req, res, next) => {
//   res.status(error.status||500)

//   if ('string' === typeof error) error = { message:error };
//   if (500 === res.status) error.message = "Internal Server Error";
  
//   res.render('error', { error });
// }

// module.exports = errorHandler

module.exports = (err, req, res, next) => {
  res.status(500);
  console.log('An error was encountered: ', err.message);
  res.render('error');
};