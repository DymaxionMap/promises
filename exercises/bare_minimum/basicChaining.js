/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */
var request = require('request');
var fs = require('fs');
var Promise = require('bluebird');

Promise.promisifyAll(fs);
Promise.promisifyAll(request);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return fs.readFileAsync(readFilePath)
    .then(contents => {
      return contents.toString('utf8').split('\n')[0];
    }, err => err)
    .then(firstLine => {
      return new Promise((resolve, reject) => {
        request('https://api.github.com/users/' + firstLine, (err, response, body) => {
          if (err) {
            reject(err);
          } else {
            resolve(body);
          }
        });
      });
    }).then(body => {
      return fs.writeFileAsync(writeFilePath, body);
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
