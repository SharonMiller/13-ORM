'use strict';

export default (err, req, res, next) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader = ('ContentType', 'application/json');
  res.write( JSON.stringify(error) );
  res.end();
};
