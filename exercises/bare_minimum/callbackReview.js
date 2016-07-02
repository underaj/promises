/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, 'utf-8', function(error, body) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, body === undefined ? undefined : body.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (filePath, cb) {
  // TODO
  request(filePath, function (error, response, body) {
    if (error) {
      cb(error, null);
    } else if (!error && response.statusCode === 200) {
      cb(null, response.statusCode); // Show the HTML for the Google homepage. 
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
