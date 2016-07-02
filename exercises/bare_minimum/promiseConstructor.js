/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  var promise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf-8', function(error, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body === undefined ? undefined : body.split('\n')[0]);
      }
    });
  });

  return promise;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  var promise = new Promise(function(resolve, reject) {
    request(url, function (error, response, body) {
      if (error) {
        reject(error);
      } else if (!error && response.statusCode === 200) {
        resolve(response.statusCode); // Show the HTML for the Google homepage. 
      }
    });
  });

  return promise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
