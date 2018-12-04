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
  // return fs.readFileAsync(readFilePath).then(contents => {
  //   return contents.toString('utf8').split('\n')[0];
  // }, err => err)
  //   .then(firstLine => {
  //     var data = [];
  //     request('https://api.github.com/users/' + firstLine).on('data');

  //   }).then(response => {
  //     return fs.writeFileAsync(writeFilePath, userProfile.toString('utf8'));
  //   });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
